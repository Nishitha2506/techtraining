import React, { useEffect, useState } from 'react'

const UseExample = () => {
    const[fruit,setFruit]=useState("🍎")

    useEffect(()=>{
if(fruit=="🍎"){
        setFruit("🍏")
    }
    else{
        setFruit("🍎")
    }
    },[fruit])
    
  return (
    <div>
        <h1>Fruit :{fruit}</h1>
        
    </div>
  )
}

export default UseExample