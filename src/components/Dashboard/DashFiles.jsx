import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fileImage from '../../images/fileimage.png';
import './Dashboard.css';
import axios from 'axios';
import DashFilter from './DashFilter';
import DashNewNote from './DashNewNote';

function DashFiles({ filter, setFilter }) {

    const [files, setFiles] = useState([])
    const urlNotes = "https://zatta1.herokuapp.com/api/notes/"

    useEffect(() => {
    
        axios.get(urlNotes).then((res) => {
            setFiles(res.data)
            
        })
        
      }, [])

    return (

        <div>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap" }}>
                <DashFilter 
                    files = {files}
                    setFilter= {setFilter}  
                    filter= {filter}
                />
    
                <DashNewNote />
            </div>

            {/* <div className='dash-files-container'> */}
                <section className='dash-files-box' style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                    {files.filter((file) => filter === ""                                                 // if 
                                            ? file.subject 
                                            : file.subject.toLowerCase().includes(filter.toLowerCase())   // else if  
                                            ? file.subject 
                                            : null                                                        // else      
                        ).map(filter => {
                            return (
                                <div className='dash-files' style={{width: "8rem"}}>
                                    <Link to= {`/notes/${filter._id}`} key= {filter.subject} className='dash-file-link' style={{display: "flex", flexDirection: "column", margin: "20px", textDecoration: "none", color: "black"}}>
                                        <div className='dash-card' style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <img src= {fileImage} alt= {filter.subject} width= "60px" height= "100%"/>
                                            </div>    
                                            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", textAlign:"center"}}>
                                                {filter.subject}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </section>
            {/* </div> */}
        </div>
    );
}


export default DashFiles;