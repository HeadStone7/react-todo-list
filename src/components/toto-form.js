import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {Input} from "@mui/material";

function TotoForm({addTodo}) {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim())return;
        addTodo(text)
        setText('')
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                {/*<input }/>*/}
                <Input placeholder="Click to add a new task" sx={{color:'#fff'}} type="text" value={text} onChange={handleChange}/>
                <Button size="small" sx={{}} variant="contained" type="submit">Add Todo</Button>
            </form>
        </div>
    );
}

export default TotoForm;