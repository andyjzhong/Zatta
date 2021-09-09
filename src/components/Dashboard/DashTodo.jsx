import React, { useState, useEffect } from 'react';
import DashFilter from './DashFilter'
import DashNewTodo from './DashNewTodo';
import { useMediaQuery } from 'react-responsive';
import { Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';
import './styles/Dashboard.css';




function DashTodo(props) {


    const currentUser = userStore(state => state.currentUser)
    const todos = userStore(state => state.todos)
    const urlTodos = userStore(state => state.urlTodos)

    const [task, setTask] = useState(todos)
    const [taskFilter, setTaskFilter] = useState("")
    const screen = useMediaQuery({query: "(min-width: 1024px)"})
    const [check, setCheck] = useState("")


    useEffect(() => {     
            axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
                setTask(res.data)
        })
    } ,[])


    function deleteNote(id)  {
        axios.delete(urlTodos + id)
            .then(() => {
                axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
                    setTask(res.data)
                })
            })
    }

    function checkbox(id, checked) {
        axios.put((urlTodos + id), { complete : checked })
        .then(() => {
            axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
                setTask(res.data)
            })
        })        
    }


    return (
        
        <div>
            
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap", marginBottom:"30px"}}>
                <DashFilter 
                filter={taskFilter}
                setFilter={setTaskFilter}
                />
                <DashNewTodo />
            </div>
            <div className='dash-task-container'>
                <section className='dash-task-box'>
                    {task.filter((file) => {
                        if (taskFilter === "") {
                            return file.subject
                        } else if (file.subject.toLowerCase().includes(taskFilter.toLowerCase())) {
                            return file.subject
                        } else return null 
                    }).map(filter => {
                        return (
                            <div className='task-card' style={{display: "flex", justifyContent: "center",alignItems:"center" , marginTop:"10px"}}>
                                <label style={filter.complete ? {cursor:'pointer', display:"flex", flexWrap:"wrap", justifyContent:"flex-start", width:"88%", marginLeft:"10px", height:"100%", textDecoration:"line-through", color:"gray"} : {cursor:'pointer', display:"flex", flexWrap:"wrap", justifyContent:"flex-start", width:"88%", marginLeft:"10px", height:"100%"}}>
                                    <input style={{height:"25px", width:"25px", marginRight:"10px", cursor:'pointer'}} type="checkbox" checked={filter.complete} onChange={(e) => checkbox(filter._id, e.target.checked)}/>    
                                    {filter.subject}
                                </label>
                                <Button variant="outline-danger" onClick={() => deleteNote(filter._id)} style={{float: "center", padding: "2px 10px 2px 10px"}}>X</Button>
                            </div>
                        )
                    })
                    }
                </section>
            </div>
            
        </div>
    );
}

export default DashTodo;