import React from 'react';
import { Button, FormControl } from 'react-bootstrap'


function DashSearch({ setFilter, filter }) {

    function resetFilter (e) {
        e.preventDefault()
        setFilter("")
    }

    return (
        <div>

                <form style={{display: "flex", flexDirection: 'row'}}>
                    <FormControl placeholder="Filter Notes" value={filter} onChange={e => {setFilter(e.target.value)}} style={{marginRight: "5px"}} />
                    <Button  type= "submit" onClick={(e) => resetFilter(e)} variant="outline-secondary" style={{marginRight: "5px"}}>Reset</Button>
                </form>

        </div>

    );
}

export default DashSearch;