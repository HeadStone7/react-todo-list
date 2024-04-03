import React, {useState} from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';
import {Input} from "@mui/material";



function TodoItem({todo, editTodo, removeTodo}) {
    const [isEditing, setIsEditing] = useState(false)
    const [newText, setNewText] = useState(todo.text)
    const handleChange = (e) => {
        setNewText(e.target.value)
    }
    const handleSubmit = () => {
        editTodo(todo.id, newText)
        setIsEditing(false)
        setNewText('')
    }
    const handleEdit = () => {
        setIsEditing(true)
    }
    const handleRemove = () => {
        removeTodo(todo.id)
    }

    return (
            <li style={{listStyleType:'none'}}>
                {isEditing ? (
                    <>
                        <Input type="text" value={newText} sx={{color: '#fff'}} onChange={handleChange}/>
                        <Button onClick={handleSubmit} sx={{margin: '20px'}} size="small" variant="contained" type="submit" endIcon={<SendIcon/>}>SEND</Button>
                    </>
                ) : (
                    <>
                        <span >{todo.text}</span>
                        <Button onClick={handleEdit} sx={{margin: '10px'}} size="small" variant="outlined" type="submit" startIcon={<CreateIcon/>}>Edit</Button>
                        <Button onClick={handleRemove} size="small" type="submit" variant="outlined" startIcon={<DeleteIcon />}>Remove</Button>
                    </>
                )}
            </li>
    );
}

export default TodoItem;