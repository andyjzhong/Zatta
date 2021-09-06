import React from 'react';
import { Button, FormControl } from 'react-bootstrap'


function DashSearch({ setTaskFilter, taskFilter }) {

    function resetFilter (e) {
        e.preventDefault()
        setTaskFilter("")
    }

    return (
        <div style={{display: "flex",  justifyContent: "center", width: '20rem' }}>

                <form style={{display: "flex", flexDirection: 'row'}}>
                    <FormControl placeholder="Filter Tasks" value={taskFilter} onChange={e => {setTaskFilter(e.target.value)}} style={{marginRight: '10px'}} />
                    <Button  type= "submit" onClick={(e) => resetFilter(e)} variant="outline-secondary">Reset</Button>
                </form>

        </div>

    );
}

export default DashSearch;