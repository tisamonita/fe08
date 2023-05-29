import React from "react";

const Body = ({count, setCount}) => {
    return (
        <>
        <button onClick={()=>setCount(count+1)} >Tambah</button>
        <button onClick={()=>setCount(count-1)}> Kurang</button>
        </>
    )
}

export default Body;