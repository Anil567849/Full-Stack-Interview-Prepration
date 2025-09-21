import React from "react";
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';



// @@@@@@@@@@@@@@@@@@@@
// 56 VIDEO
const Navbar = () =>{  
    
    const nav = {
        display : "flex",
        justifyContent : "space-between",
        backgroundColor : "yellow",
        padding : "20px",
        
    }

    return(
        <>  
            <div style={nav}>
                <NavLink exact activeClassName="active_class" to="/">About</NavLink>
                <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>



                {/* <NavLink exact activeClassName="active_class" to="/user">User</NavLink> */}

                {/* USE DEFAULT PARAMETER  */}
                <NavLink exact activeClassName="active_class" to="/user/anil">User</NavLink>


                {/* USE DEFAULT PARAMETER  */}
                {/* <NavLink exact activeClassName="active_class" to="/user/anil/thapa">User</NavLink> */}

                
                
                <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>

                {/* <br />
                <br />
                <br />

                <Link to="/">About</Link>
                <Link to="/contact">Contact</Link>

                <br />
                <br />
                <br />

                <a href="/">About</a>
                <a href="/contact">Contact</a> */}
            </div>
        </>
    );
}









export default Navbar;