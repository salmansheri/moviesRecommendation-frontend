import React from 'react'; 
import "./Navbar.css"; 

function Navbar() {
    return(
        <div className="navbar">
           
                <div className="navbarLeft">
                    <h1 className="NavbarTitle">MovieRecco App</h1>
                </div>
                <div className="navbarRight">
                <div className="navbarLink">
                <a className="navbarLinkItem" href='*'>Login</a>

                <a className="navbarLinkItem" href="*">Register</a>

                </div>
                   

                </div>
            
        </div>
    )
}

export default Navbar;