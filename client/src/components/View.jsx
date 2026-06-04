import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getUsers, deleteData } from "../apis/uersApi.js";
import { NavLink } from "react-router-dom";

const View = () =>{

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getAllUsers();
    }, []);

    const getAllUsers = async () =>{
        const response = await getUsers();
        setUsers(response.data);
    }

    // delete item 
    const deleteItem = async (e) =>{
        try {
            const res = await deleteData({id:e});
            if(res.status === 201){
                alert("Data Deleted");
            }else{
                alert("Something Went Wrong");
            }
        } catch (error) {
            console.log("Error While Delete Item",error);
        }
    }

    return(
        <>
            <Navbar />
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <span><b>All Student's Record</b></span>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered w-100">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Email Id</th>
                                                <th>Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((item, key) =>{
                                                    return(
                                                        <tr>
                                                            <td>{key += 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.mobile}</td>
                                                            <td>{item.email}</td>
                                                            <td>
                                                                <img src={`http://localhost:8000/uploads/${item.image}`} alt={item.image} height={'40px'} width={'40px'} className="img-thumbnail"></img>
                                                            </td>
                                                            <td>
                                                                <NavLink to={`/EditData/${item._id}`}><span className='badge rounded-pill text-bg-primary'>Edit</span></NavLink>
                                                                <NavLink to={''} onClick={() =>{
                                                                    if(window.confirm("Are you sure want to delete this item")){
                                                                        deleteItem(`${item._id}`)
                                                                    }
                                                                }}
                                                                >
                                                                <span className='badge rounded-pill text-bg-danger' style={{marginLeft:'5px'}}>Delete</span></NavLink>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default View;