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
        <div style={{backgroundColor:"#E7E9EB"}}>

            <Navigation />

            <div style={{display: "flex", justifyContent: 'space-around', marginTop:"10px"}}>
                <div style={{flexDirection: 'row', width: "70%", backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"20px", padding: "10px"}}>
                    <DashFiles 
                        filter= {filter}
                        files= {files}
                        setFiles= {setFiles}
                        setFilter= {setFilter}
                    />
                </div>
                <div style={{display: "flex", flexDirection: 'column', backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"20px", padding: "10px"}}>
                    <DashTodo />
                </div>

            </div>
            
            {/* <Footer /> */}

        </div>
    );
}

export default Dashboard;