import { Route, Redirect } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

// Importing Components
import Landing from './components/Landing/Landing'
import Login from './components/login/Login';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MainApp from './components/Main App/MainApp';
import userStore  from './components/Users/GetUsers';


function App() {

  const urlNotes = "https://zatta1.herokuapp.com/api/notes/"
  const urlUsers = "https://zatta1.herokuapp.com/api/users/"
  const setUsers = userStore(state => state.setUsers)
  const setNotes = userStore(state => state.setNotes) 
  const isLoggedIn = userStore(state => state.isLoggedIn)

  useEffect(() => {
    axios.get(urlUsers).then(res => setUsers(res.data)) // store all users in the Zustand store
    axios.get(urlNotes).then((res) => setNotes(res.data))  // Get all notes

  }, [])

  return (
    <div >
      
      <Route exact path='/' component={Landing} />

      <Route exact path="/login" component={ routerProps => <Login history={routerProps.history} />}/>
    
<<<<<<< HEAD
      <Route  exact path = '/dashboard' component = { (routerProps) => isLoggedIn ? <Dashboard history={routerProps.history} /> : <Login {...routerProps.history.push('/login')} /> } />

      <Route exact path = '/notes/:id' component={(routerProps) => isLoggedIn ? <MainApp note={routerProps.match.params.id} /> : <Login />} /> 
=======
      <Route  exact path = '/dashboard' component = { () => <Dashboard files={files} setFiles={setFiles} /> } />
>>>>>>> 35773a8 (initial task bar commit)

    </div>
  );
}

export default App;
