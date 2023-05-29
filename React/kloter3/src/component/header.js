import React from 'react';

export default function Header(props){

    let name = 'Tisa'

    return(
        <>
        <p>Halo nama saya {name}</p>
        <button onClick={()=>props.contoh()} >Klik</button>
        </>
    )
}