import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


//https://www.npmjs.com/package/react-modal#installation


function DashNewTodo(props) {

    const [modal, setModal] = useState(false)
    const [subject, setSubject] = useState('')
    const screen = useMediaQuery({query: "(min-width: 1200px)"})

    const modalStyle = {
        content: {
          top: '25%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2
        },
      };


    function openModal() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }


    // const newNote = () => {
    //     const url = 'https://zatta1.herokuapp.com/api/'
    //     const urlUser = url + `users/61337912ff3bed0016fed742` // has the user's id not note
    //     console.log(urlUser)
    //     axios.get(urlUser)
    //         .then(res => {
    //             const newUser = res.data._id
    //             const urlNotes = `https://zatta1.herokuapp.com/api/notes/${newUser}`
    //             axios.post(urlNotes, { subject: subject, text: '', author: newUser })
    //                 .then(res => console.log(res))
    //         })
    //     closeModal()
    // }


    return (
        
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px"}} onClick={openModal} variant="primary">{screen ? "New Task" : "+"}</Button>
            </div>
            <div className= "modalDiv">
                <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                        <h3>New Task</h3>   
                        <CloseButton onClick={closeModal}/>
                    </div>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Enter Task" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <Link to="/dashboard"><Button variant="outline-secondary" >Create</Button></Link>
                    </InputGroup>                
                </Modal>
            </div>
        </div>
    );
}

export default DashNewTodo;