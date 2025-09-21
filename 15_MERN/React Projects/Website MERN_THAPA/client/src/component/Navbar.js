import React, {useContext} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {UserContext} from '../App';


function Navbar() {

    const {state, dispatch} = useContext(UserContext);
    
    console.log(state);

    const RenderMenu = () => {
        if(state){  
            return (
                <>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink> </li>
                </>
            )
        }else{
            return (
               <>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link active" aria-current="page" to="/signup">Signup</NavLink> </li>
                </>
            )
        }
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <RenderMenu/>
                </ul>
                </div>
            </div>
        </nav>   
        </>
    )
}

export default Navbar;
