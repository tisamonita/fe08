// const myPromise = new Promise(function (resolve, reject) {
//     if (Math.random() > 0.5) {
//       setTimeout(function () {
//         resolve("Belajar Javascript");
//       }, 3000);
//     } else {
//       reject(new Error("Failed!"));
//     }
//   });

//   myPromise
//   .then((result)=>{ //untuk ambil balikan data dari kondisi resolve
//     console.log(result)
//   })
//   .catch((err) => { //balikan data dari kondisi reject //untuk handling error
//     console.log(err);
//   })
//   .finally(() => { //kondisi apapun, promisenya udahkelar
//     console.log("Process Completed!")
//   })


  const getUserDetail = function (userID) {
    // membuat Promise baru yang di dalamnya akan menghandle proses asynchronous
    return new Promise(function (resolve, reject) {
      // menggunakan proses asynchronous lain (fetch data dari sebuah API) di dalam Promise
      fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then((res) => resolve(res.json())) // handle resolve promise dari fetch
        .catch((err) => reject(err)); // handle reject promise dari fetch
    });
  };
  
  getUserDetail(15)
    .then( (result) => {
      // handle resolve dari Promise getUserDetail
      console.log(result);
    })
    .catch(function (error) {
      // handle reject dari Promise getUserDetail
      console.log(error);
    })
    .finally(function () {
      // handle ketika Promise getUserDetail selesai
      console.log("Get user detail Promise completed!");
    });