import React, { useState } from 'react'
import Navbar from './Navbar';
import { addUser } from '../apis/uersApi.js';

const Create = () => {

    const [user, setUser] = useState({
        name: "",
        mobile: "",
        email: "",
        image: ""
    });

    const getData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const fileData = (e) => {
        setUser({ ...user, image: e.target.files[0] });
    }

    const submitData = async (e) => {
        e.preventDefault();
        // validation (client side validation)
        if (user.name === '') {
            alert("Enter Your Name");
            return;
        }
        if (user.mobile === '') {
            alert("Enter Mobile No");
            return;
        }
        if (user.mobile.length !== 10) {
            alert("Enter 10 Digit Mobile No");
            return;
        }
        if (user.email === '') {
            alert("Enter Your Emaild Id");
            return;
        }
        if (user.image === '') {
            alert("Upload Image");
            return;
        }

        const formData = new FormData();  // file handling 
        formData.append('image', user.image, user.image.name);
        formData.append('name', user.name);
        formData.append('mobile', user.mobile);
        formData.append('email', user.email);
        try {
            const response = await addUser(formData);
            if(response.status === 201){
                alert(response.data);
            }else{
                alert("Something went wrong try after sometime");
            }
        } catch (error) {
            console.error(error);
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
                                    <span><b>Fill Student Registration Details :</b> </span>
                                </div>
                                <div className='card-body'>
                                    <form>
                                        <label>Name <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                        <input type='text' name='name' onChange={getData} className='form-control' placeholder='Enter Your Name'></input>

                                        <label>Mobile <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                        <input type='text' name='mobile' onChange={getData} className='form-control' placeholder='Enter Your Mobile'></input>

                                        <label>Email <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                        <input type='email' name='email' onChange={getData} className='form-control' placeholder='Enter Your Email'></input>

                                        <label>Image <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                        <input type='file' name='image' onChange={fileData} className='form-control'></input>
                                        <div className='mt-3' style={{ display: 'block', float: 'right' }}>
                                            <button className='btn btn-primary' onClick={submitData}>Submit</button>
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

export default Create