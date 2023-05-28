import React from 'react';

//komponen di react, mulai menggunakan huruf besar. kalau function huruf kecil
const Header = ({alert}) => {
    let data = "test";
  
    return (
      <>
        <div>Haloo</div>
        <div>{data}</div>
        <button onClick={alert}>Click me</button>
      </>
    );
  };

export default Header;  