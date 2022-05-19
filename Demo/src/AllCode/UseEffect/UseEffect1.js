import { useEffect, useState } from "react";

function UseEffect1()
{
    const [data,setData]=useState("HII Good morning");

    useEffect(()=>{
        setTimeout(()=>{
            setData("Santosh kumar")

        },2000)
        
    },[])


    return(
        <div className="container d-flex justify-content-center mt-3">
            <h2>{data}</h2>

        </div>
    )
}
export default UseEffect1;