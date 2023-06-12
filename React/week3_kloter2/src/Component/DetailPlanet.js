import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function DetailPlanet(){
    const {planetId} = useParams(); //dapatin parameter
    const [data, setData] = useState();

    useEffect(()=>{
        fetch(`https://swapi.dev/api/planets/${planetId}/`)
        .then((res)=>res.json())
        .then((json)=> setData(json))
    }, [])

    return(
        <>
        <h3>Halaman Detail planet {planetId}</h3>
        {data && <>
        <h2>{data.name}</h2>
        <h2>{data.created}</h2>
        </>}
        </>
    )
}