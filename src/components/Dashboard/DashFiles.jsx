import React, { useEffect } from 'react';
import DashFilter from './DashFilter';
import DashNewNote from './DashNewNote';
import { useMediaQuery } from 'react-responsive';
import DashFileList from './DashFileList';
import userStore  from '../Users/GetUsers.js';
import axios from 'axios';
import './styles/Dashboard.css'


function DashFiles({ filter, setFilter, history }) {


    const currentUser = userStore(state => state.currentUser)
    const urlNotes = userStore(state => state.urlNotes)
    const setNotes = userStore(state => state.setNotes)
    const screen = useMediaQuery({query: "(min-width: 1024px)"})


    useEffect(() => {     
        axios.get(urlNotes + `author/${currentUser._id}`).then(res => {
            setNotes(res.data)
    })
    } ,[])


    return (

        <div style={{width:"95%"}}>
            
            {screen
            ?
                <div>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap"}}>
                        <DashFilter 
                            setFilter= {setFilter}  
                            filter= {filter}
                        />
                        <DashNewNote 
                            history={history}
                        /> 
                    </div>
                        <DashFileList 
                            filter = {filter}
                        />
                </div>
            :
                <div>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap"}}>
                        <DashFilter 
                            setFilter= {setFilter}  
                            filter= {filter}
                        />
                        <DashNewNote 
                            history={history} 
                        />
                    </div>
                        <DashFileList 
                            filter = {filter}
                        />
                </div>
            }
                
        </div>
    );
}


export default DashFiles;