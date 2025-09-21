import React, {useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom';
import {UserContext} from '../App';


function Logout() {

    const {state, dispatch} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        fetch("/logout", {
            method : "GET",
            headers : {
                Accept : "application/json", 
                "Content-Type" : "application/json"
            },
            credentials : "include"
        }).then((res) => {
            if(!res){
                const er = new Error(res.error);
                throw er;
            }else{
                dispatch({type : "USER", payload : false});
                history.push("/login", {replace : true})
            }
        }).catch((err) => {
            console.log("logout.js " + err);
        })
    }, [])


    return (
        <div>
            <h1>Logout Page</h1>
        </div>
    )
}

export default Logout
