import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataEdit, updateUser as updateUserApi } from "../apis/uersApi.js";
import Navbar from "./Navbar.jsx";

const EditData = () => {

    const navigate = useNavigate();
    const { id } = useParams()

    const getAllUser = async () => {
        const res = await getDataEdit({ id });
        setUser(res.data);
    }

    useEffect(() => {
        getAllUser();
    }, []);

    const [user, setUser] = useState({
        _id: "",
        name: "",
        mobile: "",
        email: ""
    });

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const updateUser = async (e) =>{
        e.preventDefault();
        try {
            const res = await updateUserApi(user);
            if(res.status === 201){
                alert(res.data);
                navigate('/View');
            }
        } catch (error) {
            console.log("Error While update", error);
        }
    }

    return (
        <>
            <Navbar />
            <section>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='card-header'>
                                    <span><b>Edit Student Registration Details :</b> </span>
                                </div>
                                <div className='card-body'>
                                    <form>
                                        <label>Name</label>
                                        <input type='text' name='name' onChange={onValueChange} className='form-control' value={user.name}></input>

                                        <label>Mobile</label>
                                        <input type='text' name='mobile' onChange={onValueChange} className='form-control' value={user.mobile}></input>

                                        <label>Email</label>
                                        <input type='email' name='email' onChange={onValueChange} className='form-control' value={user.email}></input>

                                        <div className='mt-3' style={{ display: 'block', float: 'right' }}>
                                            <button className='btn btn-primary' onClick={updateUser}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditData;