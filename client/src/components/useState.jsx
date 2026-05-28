import React, { useState } from "react";

const Counter = () =>{

    const [count, setCount] = useState(0);
    const countData = () =>{
        setCount(count + 1);
    }

    return(
        <>
            <center><h1>{count}</h1></center>
            <center><button onClick={countData}>Increament</button></center>
        </>
    )
}

export default Counter;