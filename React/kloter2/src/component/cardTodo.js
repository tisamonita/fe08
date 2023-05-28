import React from 'react';

export default function CardTodo({todo}){
    return(
        <>
        <hr/>
        <h5>{todo.id}</h5>
        <h4>task : {todo.task}</h4>
        <h4>Status : 
            <p>{todo.complete ? 'true' : 'false'}</p>
        </h4>
        <hr/>
        </>
    )
}