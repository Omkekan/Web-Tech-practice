import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {
    const [age,setage]=useState(18)
    const[sal,setsal]=useState(30000)
    // 1 case : no dependecy 
    // useEffect(()=>{
    // setage(age+1);
    // })


    // 2 case : when dependecy value pass as blank array
    // useEffect(()=>{
    // setage(age+1);
    // },[])

    // 3 case : when dependecy values pass as state  or props
            useEffect(()=>{
                setage(age+1);
             },[sal])

  return (
    <div>
        <h2> This is Use Effect Hook</h2>
        <strong> Age:{age}</strong>
        <sstrong>Salary:{sal}</sstrong>
        <button type='button' onClick={()=>setsal(sal+1000)}>increment sal</button>
    </div>
  )
}

export default UseEffectHookComp