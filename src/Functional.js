import React from 'react'

function Functional() {
    
    function ClickHandler(){
    console.log("Button Clicked")

    }
  return (
    <>
     <div>Functional</div>
    <button onClick={ClickHandler}>Click</button>
    </>
   
  )
}

export default Functional