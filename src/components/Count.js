import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Count() {
    const [count, setCount] = useState (0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count) => count + 1);
        },1000)
    },[]);

  return (
    <>
    <div>
        <h1>I have  rendered {count} times</h1>

    </div>
    </>
    
  )
}

export default Count