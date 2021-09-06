import './App.css';
import Landing from './components/Landing/Landing'
import { Route , Switch } from 'react-router-dom'
import Login from './components/login/Login';

import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MainApp from './components/Main App/MainApp';
import axios from 'axios'

function App() {

  const [files, setFiles] = useState([])                      //setting state and variable for the files
  const [user, setUser] = useState('')
  const [note, setNote] = useState('')
  const urlNotes = "https://zatta1.herokuapp.com/api/notes/"
  const urlUser = `https://zatta1.herokuapp.com/api/users/${user}`


  useEffect(() => {                                           //fetching backend data
    
    axios.get(urlNotes).then((res) => {
        setFiles(res.data)
        
    })
    
  }, [])

  return (
    <div class='bg-gray-50' >
      
      <Route exact path='/' component={Landing} />

      <Route exact path="/Login" component ={Login}/>
    
      <Route  exact path = '/dashboard' component = { () => <Dashboard files={files} setFiles={setFiles} /> } />

      <Route exact path = '/notes/:id' component={(routerProps) => <MainApp note={routerProps.match.params.id} /> } />
    </div>
  );
}

export default App;
