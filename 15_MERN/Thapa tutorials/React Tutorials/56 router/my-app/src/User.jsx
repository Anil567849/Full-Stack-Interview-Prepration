import React from "react";
import { useHistory, useLocation, useParams } from "react-router";
import App from "./App";

/*
// @@@@@@@@@@@@@@@@@@22222 
// 59 VIDEO = OLD WAY TO ACCESSING PARAMETERS
const User = ({match}) => {

    return (
        <>
            <h1>Hello User {match.params.fName} </h1>
        </>
    );

}
*/




/*

// @@@@@@@@@@@@@@@@@@22222 
// 59 VIDEO = NEW WAY TO ACCESSING PARAMETERS - USING userParams
const User = () => {

    // use same name as you providing from App.js 
    const {fName, lName} = useParams();

    return (
        <>
            <h1>Hello User {fName} {lName} </h1>
        </>
    );

}

*/







// @@@@@@@@@@@@@@@@@@22222 
// 60 VIDEO = useLocaton = to get current location of user
const User = () => {

    // use same name as you providing from App.js 
    const {fName, lName} = useParams();


    // use only useLocation if you need immutable location [it won't change] good h ye
    // useHistory also give you location but that location is mutable so don't take path of useHistory
    const location = useLocation();
    console.log(location);


    const history = useHistory();
    console.log(history);



    return (
        <>
            <h1>Hello User {fName} {lName} </h1>

            <h1>Current Path {location.pathname}</h1>

            { location.pathname === `/user/anil/kumar` ? <button>You are premium User </button> : null}

            <button onClick={ () => history.goBack() } >Go Back</button>
            <button onClick={ () => history.push('/') } >HomePage</button>

        </>
    );

}










export default User;