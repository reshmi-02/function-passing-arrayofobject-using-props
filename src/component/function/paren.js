import React from 'react'
import Child from './child.js'
const Parent=()=>{
    const name="reshmi";
    const object={
        name:"passing object using prop",
        age:21,
       
    }
    const arr=[1,2,3,4] 
    const arrayofobject=[
        {
            id:1,
            name:"Kani"  
        },
        {
            id:2,
            name:"Tamil"
        },
        {
            id:3,
            name:"preetha"
        }
    ]
    return(
        <div>
            <Child name={name} obj={object} arr={arr} aob={arrayofobject}/>
        </div>
    )
}

export default Parent 