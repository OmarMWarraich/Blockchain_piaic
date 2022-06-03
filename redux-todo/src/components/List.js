import React, { useState } from "react";
import { deleteTodo, editTodo } from "../actions";
import { useDispatch } from "react-redux";

export const List = ({data}) => {
    const dispatch = useDispatch();
    const [ inputData, setInputData ] = useState();
    const [ editState, setEditState ] = useState(false);

    const handleEdit = (task) => {
        try {
            if (!task) throw "Empty Field"
            const payload = {
                title: task,
                id: data.id
            }
            const action = editTodo(payload);
            dispatch(action);
            console.log("payload", payload)
        }
        catch(error) {
            console.log("error", error)
        }
    }

    return (
        <div>
        <div>
            {data.title}
        
        <button onClick={() => dispatch(deleteTodo(data.id))}>Delete</button>
        <button onClick={() => setEditState(!editState)}>Edit</button>
        {
            editState ?
            <>
                <input value={inputData}
                 onChange={(e) => setInputData(e.target.value)}/>
                <button onClick={() => handleEdit(inputData)}>Submit</button>
            </>
            :""
        }
        </div>
        </div>
    )
}

