import React, { useState } from "react";

function App()
{
    const [data,setData]=useState([{
        name:"santosh",
        village:"naranga"
    },{name:"Ashok"}])

    const handle=()=>{
        setData([...data,{name:"Animesh"}])
        console.log(data)
    }
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{width:"100%",height:"100vh"}}>
            <div>
                {data.map((el)=>{
                    return (<h2>{el.name}</h2>)
                })}
            </div>
            <div>

            <button onClick={handle}>Click</button>
            </div>
        </div>
    )}

    export default App;
    
