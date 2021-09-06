import React, { useState } from 'react';
import DashFilter from './DashFilter';
import DashFiles from './DashFiles';
import DashNewNote from './DashNewNote';
import Navigation from '../Landing/Navigation';
import Footer from '../Landing/Footer';
import DashTodo from './DashTodo';


function Dashboard({ files, setFiles }) {

    const [filter, setFilter] = useState("")

    return (
        <div>

            <Navigation />
            
            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
                <DashFilter 
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