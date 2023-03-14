import React,{useState} from 'react'
import axios from 'axios'

function FakeApi() {

  const [data, setData] = useState([])

  const FakeApi = ()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
     console.log(response);
    setData(response.data)
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    //         setData(res.categories)
  })
}
  return (
    <>
     <div className="container my-3">
      <div className="row">
        {/* {
          data.map((user)=>{
            return(
           <div className="col-4">
              <div className="card" style={{width: "18rem"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{user.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary" onClick={FakeApi}>FakeApi</a>
            </div>
           </div>
      </div>  
            );
          })
        } */}
       <div className="col-4">
        <div className="card" style={{width: "18rem"}}>
         <img src="..." className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" className="btn btn-primary" onClick={FakeApi}>FakeApi</a>
       </div>
       </div>
      </div> 
    </div>
   </div>
    </>
   
  )
}

export default FakeApi