import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Planets from "./planets";

export default function DetailPlanet(){
    const {planetId} = useParams();

    const [data, setData] = useState();

    useEffect(()=>{
        fetch(`https://swapi.dev/api/planets/${planetId}`)
        .then((res)=>res.json())
        .then((json) => {
            setData(json);
        })
    }, [])

    return(
        <>
        DetailPlanet berdasarkan ID: {planetId}
        {data && (<>
        <h2>{data.name}</h2>
        </>)}
        </>
    )
}