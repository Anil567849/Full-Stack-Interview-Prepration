import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>

        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-md-10 mx-auto">
                        
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <NavLink exact id="navbar-brand" to="/">Thapa Technical</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    
                    
            </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;