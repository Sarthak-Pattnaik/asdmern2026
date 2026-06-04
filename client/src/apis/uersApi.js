import axios from 'axios';
const URL = 'http://localhost:8000';

export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.error(error);
    }
}

export const getUsers = async () =>{
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.error("Error while get API", error);
    }
}

export const deleteData = async (data) =>{
    try {
        return await axios.post(`${URL}/delete`, data);
    } catch (error) {
        console.log("Error While Creating API with Delete Data", error);  
    }
}

export const getDataEdit = async (data) =>{
    try {
        return await axios.post(`${URL}/getuser`, data);
    } catch (error) {
        console.log("Error while get edit data", error);
    }
}