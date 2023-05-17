import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import Auth from "../utils/auth"
//import new logo. Import '' from "../assets/images/.png"

export default function Header(){
    const loggedIn = Auth.loggedIn();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isLoginPage = location.pathname ==='/login';
    const isSignupPage = location.pathname ==='/signup';

    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" bg={loggedIn && !isHomePage ? "dark" : null}>
        {loggedIn ? (
          <>
            <Navbar.Brand as={Link} to="/" className="brand brand-logged d-flex align-items-center">
              {/* use new img here*<img alt="" style={{ display: "inline" }} src={} className="-icon" /> */}
              ConquerFitness
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav >
                {/* use eventKey to show navbar style from react bootstrap */}
                <Nav.Link as={Link} to="/exercise" eventKey="1" >Exercise</Nav.Link>
                <Nav.Link as={Link} to="/history" eventKey="2">History</Nav.Link>
                <Nav.Link onClick={Auth.logout} >Logout </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>) :
          (<Navbar.Brand as={Link} to="/" className={`brand brand-new mx-auto d-flex align-items-center
            ${isLoginPage || isSignupPage ? "brand-text" : null}`}>
            {/* add new logo*<img alt="" style={{ display: "inline" }} src={} className="-icon" /> */}
            ConquerFitness
          </Navbar.Brand>)}
      </Navbar >  
    );
}