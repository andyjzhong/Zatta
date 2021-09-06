import React, { useState, useEffect } from 'react';
import DashFilter from './DashFilter';
import DashFiles from './DashFiles';
import DashNewNote from './DashNewNote';
import userStore  from '../Users/GetUsers.js';
import Navigation from '../Landing/Navigation';
import Footer from '../Landing/Footer';
import DashTodo from './DashTodo';

function Dashboard({ history }) {

    const currentUser = userStore(state => state.currentUser)
    const notes = userStore(state => state.notes)
    const [files, setFiles] = useState([])                      //setting state and variable for the files
    const [filter, setFilter] = useState("")                    //setting state and variable for the filter function
    
    useEffect(() => {
        const arr = notes.filter(item => item.author === currentUser[0]._id)
        console.log(currentUser[0]._id)
        console.log(notes[7].author)
        setFiles(arr)
    } ,[])

    return (
        <div>

            <Navigation />
            
            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
            <DashFilter 
                    files = {files}
                    setFilter= {setFilter}  
                    filter= {filter}
                />
    
                <DashNewNote />
        
            </div>

            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>

                <DashFiles 
                    filter= {filter}
                    files= {files}
                    setFiles= {setFiles}
                />
                <DashTodo />


            </div>
            
            <Footer />

        </div>
    );
}

export default Dashboard;