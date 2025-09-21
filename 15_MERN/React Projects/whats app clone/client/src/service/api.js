import axios from 'axios';

const URL = "http://localhost:8000";

export const addUser = async (data) =>{
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('error while calling apiUser api ' + error);
    }
}

export const getUsers = async () =>{
    try {
        let res = await axios.get(`${URL}/users`);
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log('error while calling get users api ' + error);
    }
}