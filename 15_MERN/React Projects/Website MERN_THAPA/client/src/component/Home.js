import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import welcome from '../images/a3.png';


const Home = () => {

    const history = useHistory();

    const [userData, setUserData] = useState({
        name : "Anil Default",
    });

    const callHomePage = async () => {
        try {
          const res = await fetch("/getData", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          });
    
          const data = await res.json();
    
        //   console.log(data);
    
          if ((res.status !== 200) | !data) {
            throw new Error(res.error);
          }else{
              setUserData({...userData, name : data.name});
          }
        } catch (err) {
          console.log("home.js " + err);
        }
      };
    
    useEffect(()=>{
        callHomePage();
    }, [])

    const main = {
        backgroundImage: `url(${welcome})`,
        height : "100vh",
        width : "100vw",
        backgroundRepeat : 'no-repeat',
        margin : "0px auto",
        backgroundPosition : "center"
    }

    return (
        <div style={main}>
            <h1 style={{textAlign : "center"}}>{userData.name}</h1>
            <h1 style={{textAlign : "center"}}>WELCOME DEVELOPERS AND INNOVATORS</h1>
            <p style={{textAlign : "center"}}>WE ARE A MERN INNOVATORS AND WORLD CHANGER</p>
        </div>
    )
}

export default Home
