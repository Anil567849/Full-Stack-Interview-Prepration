import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import i from '../images/a2.png';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Signup() {

    const [user, setUser] = useState({
        name : "", 
        email : "",
        phone : "",
        work : "",
        password : "",
        cpassword : ""
    })

    const imgCss = {
        height : "100%",
        width : "100%",
        
    }

    const handleChange = (e) => {
        // console.log(e.target);
        let name = e.target.name;
        let val = e.target.value;

        console.log(e.target.name);

        setUser({...user, [name] : val});
    }


    const postData = async (e) => {

        e.preventDefault();

        // console.log("calles");

        const {name, email, phone, work, password, cpassword} = user;


        try{
            const res = await fetch("/register", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({
                    name : name,
                    email : email,
                    phone : phone,
                    work : work,
                    password : password,
                    cpassword : cpassword
                })
            });

            const data = await res.json();

            // console.log(res);

            if(res.status === 422 || !data){
                console.log("registration failed  signup.js");
            }else{
                console.log("signup success");
                // history.push()
            }
        }catch(err){
            console.log("Error signup.js " + err);
        }

    }






    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={postData} method="POST">
                    
                        <div className="mb-1 mt-2">
                            <label htmlFor="name" className="form-label">name</label>
                            <input value={user.name}  name="name" onChange={handleChange} type="text" className="form-control" id="name"/>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="email" className="form-label">email</label>
                            <input value={user.email}  name="email" onChange={handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                        </div>
                            <div className="mb-1">
                            <label htmlFor="phone" className="form-label">phone</label>
                            <input value={user.phone}  name="phone" onChange={handleChange} type="text" className="form-control" id="phone"/>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="profession" className="form-label">profession</label>
                            <input value={user.work} onChange={handleChange} type="text" name="work" className="form-control" id="profession"/>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="password"  className="form-label">password</label>
                            <input value={user.password} name="password" onChange={handleChange} type="text" className="form-control" id="password"/>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="cpassword"  className="form-label">confirm password</label>
                            <input value={user.cpassword} name="cpassword" onChange={handleChange} type="text" className="form-control" id="cpassword"/>
                        </div>
                        <button type="submit"  className="btn btn-primary">Sign up</button>
                    </form>
                    <NavLink to="/login"><p>Already Have Account</p></NavLink>
                    
                </div>

                <div className="col-md-6">
                    <img style={imgCss} src={i} alt="" />
                </div>


            </div>
        </div>
    )
}

export default Signup
