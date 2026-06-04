import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataEdit } from "../apis/uersApi.js";
import Navbar from "./Navbar.jsx";

const EditData = () => {

    const {id} = useParams()

    const getAllUser = async () => {
        const res = await getDataEdit({ id });
        setUser(res.data);
    }

    useEffect(() => {
        getAllUser();
    }, []);

    const [user, setUser] = useState({
        _id:"",
        name:""
    });

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name] : e.target.value});
        console.log(user);
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
                                        <input type='text' name='name' className='form-control' value={user.name}></input>

                                        <label>Mobile</label>
                                        <input type='text' name='mobile' className='form-control' value={user.mobile}></input>

                                        <label>Email</label>
                                        <input type='email' name='email'  className='form-control' value={user.email}></input>

                                        <label>Image</label>
                                        <input type='file' name='image' className='form-control'></input> <br></br>
                                        
                                        <p>Old Image</p>
                                        <img src={`http://localhost:8000/uploads/${user.image}`} alt={user.image} height={'100px'} width={'100px'} className="img-thumbnail"></img>
                                        <div className='mt-3' style={{ display: 'block', float: 'right' }}>
                                            <button className='btn btn-primary'>Submit</button>
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