import React from "react";
import Students from "./Students";

const StudentData = () =>{
    return(
        <>
            {
                Students.map((elem) =>{
                    return(
                        <h1>{elem.id}, {elem.name}, {elem.age}, {elem.course}, {elem.status === 1 ? 'Active' : 'In-active'}</h1>
                    )
                })
            }
        </>
    )
}

export default StudentData;