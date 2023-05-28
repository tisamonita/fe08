import React from 'react';
import '../App.css'

export default function Footer(){
    return(
        <>Component Footer</>
    )
}

//destructuring object
export function ShowData( {student, nilai }){
    return(
        <>
        <br/>
        <hr />
        <h4>show data component</h4>
        <p>{student}</p>
        <h2>{nilai}</h2>
        <hr/>
        </>
    )
}