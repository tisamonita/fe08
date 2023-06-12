import React, {useEffect, useState} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Detail (){
    const {PlanetId} = useParams();

    //useSearchParams
    let [searchParams, setSearchParams] = useSearchParams();
    
    const [data, setData] = useState();

    const [search, setSearch ] = useState();

    useEffect(()=>{
        setSearchParams(searchParams.get("sort"))

        fetch(`https://swapi.py4e.com/api/planets/${PlanetId}`)
        .then((res)=>res.json())
        .then((json)=>setData(json))
    }, [])

    return(
        <>
        {console.log(searchParams)}
        Ini Halaman Detail Planet :  {PlanetId}
        {data && <>
            <h3>{data.name}</h3>
            <h3>{data.rotation_period}</h3>
            <h3>{data.diameter}</h3>
        </>}
        </>
    )
}