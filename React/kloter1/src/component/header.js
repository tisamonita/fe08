const Header = ({count, setCount, alert}) => {
    let datatest = 'Header';
    return(
      <>
        <div> halo {datatest} </div>
        <div> hi </div>
        <p>data dari props : {count} </p>
        <button onClick={()=> setCount(count+2)} > change from Header component </button>
        <button onClick={alert} >test async function as a props</button>
      </>
    )
  }
  
export default Header;