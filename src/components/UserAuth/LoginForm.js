import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import userStore  from '../Users/GetUsers';
import PasswordModal from './PasswordModal';

function LoginForm({ history }) {

    // data from user store
    const urlNotes = userStore(state => state.urlNotes)
    const urlTodos = userStore(state => state.urlTodos)
    const urlUsers = userStore(state => state.urlUsers)

    const setNotes = userStore(state => state.setNotes) 
    const setTodos = userStore(state => state.setTodos) 
    const setLogedIn = userStore(state => state.setLoggedIn)
    const setUser = userStore(state => state.setCurrentUser)
    const [modal, setModal] = useState(false)

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
        email: '',
        _id: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(urlUsers + 'login', loginInfo)
            .then(res => {
                if(res.data.length){
                    const sessionID = res.data
                    axios.get(urlUsers + `session/${res.data}`)
                        .then(res => {
                            axios.get(urlNotes + `author/${res.data.user._id}`).then(res => {
                                setNotes(res.data)
                            })
                            return res.data.user
                        })
                        .then(res => {
                            axios.get(urlTodos + `author/${res._id}`).then(res => {
                                setTodos(res.data)
                            })
                            return res
                        })
                        .then(res => {
                            axios.put(urlUsers + `${res._id}`, { userAuth: { isLoggedin: true, SessionID: sessionID }})
                            return res
                        })
                        .then(res => {
                            setUser(res)
                            window.sessionStorage.setItem('username', res.username)
                        }).then(() => {
                            setLogedIn(true)
                            window.location.reload()   
                        })                    

                    }  else {
                        setLogedIn(false)
                        setModal(true)
                    }
                })
                
        window.sessionStorage.getItem('username') && history.push('/dashboard')
        setLoginInfo({username: '', password: ''})
    }


    return (
        <form className="mt-10" method="POST" onSubmit={handleSubmit}>
                            
        <label htmlFor="username" className="block text-xs font-semibold text-gray-600 uppercase">Username<span style={{color:'gray'}}><i>(Case Sensitive)</i></span></label>
        <input id="username" type="text" name="username" placeholder="username" autoComplete="username"
            className="block w-full py-3 px-2 mt-2 
            text-gray-800 appearance-none 
            border-solid border-2 rounded-2xl border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required value={loginInfo.username} onChange={(e) => {e.preventDefault(); setLoginInfo({...loginInfo, username: e.target.value})}} />

        
        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
        <input id="password" type="password" name="password" placeholder="password" autoComplete="current-password"
            className="block w-full py-3 px-2 mt-2 mb-4
            text-gray-800 appearance-none 
            border-solid border-2 rounded-2xl border-gray-100
            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required value={loginInfo.password} onChange={(e) => {e.preventDefault(); setLoginInfo({...loginInfo, password: e.target.value})}} />

        
        <button type="submit"
            className="w-full py-3 mt-10 bg-black rounded-md
            font-medium text-white uppercase
            focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
            Login
        </button>

        
        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
            <a href="forgot-password" className="flex-2 underline text-black">
                Forgot password?
            </a>

            <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                or
            </p>

            <Link to='/signup' className="flex-2 underline text-black">
                Create an Account
            </Link>
        </div>
        { modal && <PasswordModal modal={modal} setModal={setModal} string={'Username or Password Incorrect'}/> }
    </form>
)
}

export default LoginForm
