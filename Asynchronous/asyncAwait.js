
async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      return data;
    } catch (error) {
      return error
    }
  }
  
  getData()
  .then((data) => console.log(data)).catch((err)=>{
    console.log(err)
  });