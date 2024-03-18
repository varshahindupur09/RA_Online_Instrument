import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink 
                        as={Link} 
                        to="/instructions-consent" 
                        activeStyle={{ color: "#4d4dff" }}
                        >
                        Instructions & Consent
                    </NavLink>
                  
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;