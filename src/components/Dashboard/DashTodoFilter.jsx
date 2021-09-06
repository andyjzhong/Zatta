import React from 'react';
import { CloseButton, FormControl } from 'react-bootstrap'


function DashSearch({ setTaskFilter, taskFilter }) {

    function resetFilter (e) {
        e.preventDefault()
        setTaskFilter("")
    }

    return (
        <div>
            
            <form style={{display: "flex", flexDirection: 'row',alignItems:"center", borderRadius:"5px", border:"1px solid #CCC"}}>
                <FormControl placeholder="Filter Tasks" value={taskFilter} onChange={e => {setTaskFilter(e.target.value)}} style={{marginRight: '10px', border:"none"}} />
                <CloseButton onClick={(e) => resetFilter(e)}/>
            </form>

        </div>

    );
}

export default DashSearch;