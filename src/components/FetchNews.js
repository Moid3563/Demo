import React, {useState} from 'react'
import axios from 'axios'

function FetchNews() {

    const [news,setNews] = useState([])

    const FetchNews = ()=>{
       axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=759a24cdf3a6402d86d73f7d8729f360")
       .then((response)=>{
        console.log(response);
        setNews(response.data.articles)            
       })
    }
  return (
   <>
   <div className="container my-3">
    <div className="row">
        <div className="col-4">
        <button className='btn btn-primary' onClick={FetchNews}>FetchNews</button>
        </div>
    </div>
   </div>

   <div className="container">
    <div className="row">

        {
            news.map((value)=>{
                return(
                    <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                   <img src={value.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                   <h5 className="card-title">{value.title}</h5>
                   <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">Main</a>
                    </div>
                     </div>
                    </div>
                );
            })
        }
    </div>
   </div>
   </>
  )
}

export default FetchNews