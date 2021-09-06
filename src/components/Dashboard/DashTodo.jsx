import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import fileImage from '../../images/fileimage.png'
import './Dashboard.css'
import axios from 'axios';
import todo from './todo.json'
import DashTodoFilter from './DashTodoFilter'
import DashNewTodo from './DashNewTodo';



function DashTodo(props) {

    const [task, setTask] = useState(todo)
    const [taskFilter, setTaskFilter] = useState("")

    // const urlNotes = "https://zatta1.herokuapp.com/api/notes/"

    // useEffect(() => {
    
    //     axios.get(urlNotes).then((res) => {
    //         setTask(res.data)
            
    //     })
        
    //   }, [])


    return (
        <div>
                <DashTodoFilter 
                taskFilter={taskFilter}
                setTaskFilter={setTaskFilter}
                />
    
                <DashNewTodo />

        <div className='dash-task-container'>
            <section className='dash-task-box'>
                
                {task.filter((file) => {
                    if (taskFilter === "") {
                        return file.subject //
                    } else if (file.subject.toLowerCase().includes(taskFilter.toLowerCase())) { //
                        return file.subject //
                    } else return null 
                }).map(filter => {
                    return (
                        <div className='dash-task'>
                            <div className="dash-task-name">
                                <div className='task-card'>
                                        <span>{filter.subject}</span>
                                </div>
                            </div>
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