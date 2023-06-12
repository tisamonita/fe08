import React, {useState, useEffect} from 'react';
import {Outlet, Link} from 'react-router-dom';

export default function Planets(){
    const [data, setData] = useState();
    const [halaman, setHalaman] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch(`https://swapi.dev/api/planets/?page=${halaman}`)
        .then((res)=> res.json())
        .then((json) => {
            setData(json);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        } 
        )
    }, [halaman])

    return(
        <>
            <h3>List Data Planets</h3>
            <Outlet />
            <button disabled={halaman<=1} onClick={()=>setHalaman(halaman-1)} >Halaman Sebelumnya </button>
            {data && <button disabled={halaman>= data.count/10} onClick={()=>setHalaman(halaman+1)}>Halaman Selanjutnya </button> }
            {/* Tambahkan Fitur Loading, supaya user ga bingung */}
            {loading && 'Loading...'}
            {/* 
            1. bikin state halaman DONE
            2. bikin useeffect, updating parameter : [halaman] DONE
            3. tambah eventHandling, onClick => update state halaman
            */}
            {/* short-circuit operator. Check dulu, kalau true */}
            {!loading && data?.results?.map((item) => {
                return(
                <>
                    <h5>{item.name}</h5>
                    <h5>{item.diameter}</h5>
                    <h5>{item.climate}</h5>
                    <Link to={`/planets/${item.url.split('/')[5]}`}><button>Detail Planet</button></Link>
                    <hr />
                </>
                )
            })}
        </>
    )
    //Goals : ngambil data planet dan ditampilkan ke user
    //use state, use Effect, dan render list. Render array ke tampilan react


    // const state untuk nampung data
    // ambil data pakai fetching data biasa => dimasukkan kedalam useEffect mounting [] DONE
    //masukin ke state DONE
    //returnnya panggil state terus di mapping terus di render hasil mapping DONE

}