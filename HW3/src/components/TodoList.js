import React, {Suspense, useState} from "react";
import TextField from "@mui/material/TextField";
import {Box, Button, IconButton, List, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

/**
 * Список дел
 * @returns {Element}
 * @constructor
 */
export default function TodoList() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    /**
     * Добавление задачи
     * @param e
     */
    function addToList(e) {
        e.preventDefault();
        if (input.trim().length) {
            setList([...list, input]);
            setInput("");
        }
    }

    /**
     * Удаление задачи
     * @param delItem
     */
    function deleteFromList(delItem) {
        setList(list.filter((item) => delItem !== item));
    }

    return (
        <Suspense fallback={<ClimbingBoxLoader/>}>
            <>
                <h1>TodoList</h1>
                <Box className="todo-box">
                    <TextField id="filled-basic" variant="filled" type="text" value={input}
                               onChange={(e) => setInput(e.target.value)}/>
                    <Button variant="contained" onClick={addToList}>Add</Button>
                </Box>
                <List className="todo-list">
                    {list.map((item, index) =>
                        <ListItem key={index} className="todo-item">
                            <ListItemText primary={item}/>
                            <IconButton aria-label="delete" onClick={() => deleteFromList(item)}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItem>)}
                </List>
            </>
        </Suspense>
    );
}