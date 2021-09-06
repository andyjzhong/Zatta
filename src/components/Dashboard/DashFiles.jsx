import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import fileImage from '../../images/fileimage.png'
import './Dashboard.css'
import axios from 'axios';

function DashFiles({ filter }) {

    const [files, setFiles] = useState([])
    const urlNotes = "https://zatta1.herokuapp.com/api/notes/"

    useEffect(() => {
    
        axios.get(urlNotes).then((res) => {
            setFiles(res.data)
            
        })
        
      }, [])

    return (
        <div className='dash-files-container'>
            <section className='dash-files-box'>

                {files.filter((file) => filter === ""                                                 // if 
                                        ? file.subject 
                                        : file.subject.toLowerCase().includes(filter.toLowerCase())   // else if  
                                        ? file.subject 
                                        : null                                                        // else      
                    ).map(filter => {
                        return (
                            <div className='dash-files'>
                                <Link to= {`/notes/${filter._id}`} key= {filter.subject} className='dash-file-link'>
                                    <div className='dash-card'>
                                            <img src= {fileImage} alt= {filter.subject} width= "60px" height= "100%"/>
                                            <span>{filter.subject}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    );
}


export default DashFiles;