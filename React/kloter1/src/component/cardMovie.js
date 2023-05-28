import React from 'react';

// props
// props.sendData
// destructuring
export default function CardMovie({sendData}) {
    console.log(sendData, 'TEST');
  return (
    <div className="card">
      <div className="image-header">
        <img src={sendData.image} alt="movie poster"/>
      </div>
      <div className="detail">
        <h2>Judul : {sendData.title}</h2>
        <p>Tahun : {sendData.year}</p>
        <p>Status : {sendData.status ? 'sudah ditonton' : 'belum ditonton'}</p>
        {/* TERNARY OPERATOR. kalau status true : 'sudah ditonton' */}
        {/* kalau false : belum ditonton */}
      </div>
    </div>  
  )
}