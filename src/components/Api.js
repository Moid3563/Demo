import React from 'react'
import { useEffect, useState} from 'react'

function Api() {
   const [data, setData]= useState([]);

// get api method implement
        const url = ("https://jsonplaceholder.typicode.com/users")
       useEffect(()=>{
        fetch(url)
        .then((result)=>result.json())
        .then((data)=>{
          console.log(data);
           setData(data);
        })
        .catch((err)=>{
          console.log("error")
        })
    },[]);
     
    const postPutEvent=()=>{
      const data ={
        id:'def123',
        name:'Rahul',
        mobile:'7676767869',
        designation:'developer',
        pin:'1234'
      }
      const url = data.id ? "https://jsonplaceholder.typicode.com/users/"+data.id : "https://jsonplaceholder.typicode.com/users"
      fetch(url, {
        method:data.id ? 'PUT' : 'POST',
        headers:{
          'Content-Type':' application/json',
          'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify(data)
      })
      .then(response=>{
        console.log("response", response)
        if(response.state == 200){
          alert("Success")
        }
      })
      .catch((err)=>{
        console.log("error")
      })
  
    }
  

  return (
    <>
    <h2>Welcome</h2>
    {
      data.map(item=>{
        return(
          <>
          <div>{item.email}</div>
          </>
        )
      })
    }
    <button onClick={postPutEvent}>Submit</button>
    </>
 
  )
}

export default Api