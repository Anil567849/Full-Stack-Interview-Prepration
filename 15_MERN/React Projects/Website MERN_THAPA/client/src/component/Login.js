import React, {useState, useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom';
import i from '../images/a1.png';
import {UserContext} from '../App';

function Login() {

    const {state, dispatch} = useContext(UserContext);
        
    const imgCss = {
        height : "100%",
        width : "100%",
        
    }


    const history = useHistory();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = async (e) => {
        // console.log("clicked");
        e.preventDefault();
        
        const res = await fetch('/signin', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        });

        const data = await res.json();

        // console.log(res);

        if(res.status === 422 || !data){
            console.log("login failed");
        }else{
            dispatch({type : "USER", payload : true});
            console.log("log in success");
            history.push('/');
        }
    }

    return (
        
        <div className='container'>
            <div className="row">

                <div className="col-md-6 my-auto">

                    <form onSubmit={userLogin} method="POST">
                        <div className="mb-1">
                            <label htmlFor="email" name="email" className="form-label">email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="password" name="password" className="form-label">password</label>
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password"/>
                        </div>
                        <button type="submit"  className="btn btn-primary">log in</button>
                    </form>
                    <NavLink to="/signup"><p>Don't Have Account</p></NavLink>
                
                </div>    

                <div className="col-md-6">
                    <img style={imgCss} src={i} alt="" />
                </div>
            </div>            
        </div>
    )
}

export default Login
