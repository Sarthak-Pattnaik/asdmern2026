import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getUsers } from "../apis/uersApi.js";

const View = () =>{

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getAllUsers();
    }, []);

    const getAllUsers = async () =>{
        const response = await getUsers();
        setUsers(response.data);
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
                                                            <td></td>
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