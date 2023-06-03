import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();

  useEffect(()=>{
 // fetch data dari API
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/todos")
      // ubah response menjadi JSON
      .then((response) => response.json())
      // simpan data ke dalam state
      .then((json) => {
        // set data
        setData(json);
        // set loading menjadi false
        setLoading(false);
      })
      // handle error
      .catch((error) => {
        // set error
        // setError(error);
        // set loading menjadi false
        // setLoading(false);
      });
  }, [])
  // componentDidMount // sering terpakai
  // useEffect(()=>{
  //   console.log('Jalankan hanya jika browser pertama kali di reload')
  // }, []) 

  // useEffect(()=>{
  //   console.log('Jalan jika browser pertama kali di reload & ada perubahan pada state apapun')
  // })

  // componentDidUpdate // sering terpakai
  // useEffect(()=>{
      // if(userReq == 'people')

  //   console.log('jalan jika browser pertama kali di reload & state yang menjadi parameter ikut berubah')
  // }, [userReq]) 
  // const [userReq, setUserReq] = useState('people')

  //componentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log("Effect Hook 1 jalan ketika component akan di-unmount");
  //   };
  // });

  return (
    <>
    <div className="App">
        Haloo <br/>
        {console.log(value)}
        {count} <br/>
        <hr />
        <button onClick={()=>setCount(count+1)}>Tambah</button>
    </div>
    <div>
      List data Todo :
      {loading && 'Loadingg....'}
      {data && data.map((item)=>{
        return(
          <>
          <h5 key={item.id}>{item.title}</h5>
          <h5>{item.completed ? 'Selesai' : 'Belum selesai'}</h5>
          <hr />
          </>
        )
      })}
    </div>
    </>
  );
}

export default App;
