import React, { useState, useEffect } from 'react'
// import { ReactNavbar }from "react-responsive-animate-navbar";
import { Button, Nav , NavDropdown , Navbar , Form , FormControl, NavLink  , Row , Col  , Container} from 'react-bootstrap';
import './css/Header.css'
import { IconContext } from "react-icons";
import faBars, { FaBars }  from 'react-icons/fa'
import navLogo from './images/nav_logo.png'
import btnbg from './images/navbtnbg.png'
// import {Nav , NavLink , NavBtn , Bars ,  NavMenu , NavBtnLink} from './NavbarElements'
// const headerContainer={
//     position: 'absolute',
//     minWidth: '100vw',
//     height: '166px',
//     left: '0px',
//     top: '0px',
//     background: '#0F0230',
//     boxShadow: '0px 4px 120px rgba(0, 0, 0, 0.25)'
// }

// const navLogoStyle={
//     margin: '10px auto 20px',
//     display: 'block'
// }


const Header = () => {
   
    
    return (
      <div>
       
       <Navbar  className="header" expand="lg">
         <Row>
           <Col className="header-col"><Button className="header-btn">Launch App</Button></Col>
           <Col className="header-col"><Button className="header-btn">Apply for IDO</Button></Col>
           
           </Row>
           <Col xs={5}><img src={navLogo} className="header-logo"/></Col>
        
  <Navbar.Toggle aria-controls="basic-navbar-nav"aria-activedescendant/>
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="mr-auto">
      {/* Run this code for adding links */}
      {/* <Row classname="nav-row">
        <Col className="nav-col">
        <Nav.Link href="#home" ><p className="header-links">Home</p></Nav.Link>
        </Col>
        <Col className="nav-col"><Nav.Link href="#link" ><p className="header-links">Link1</p></Nav.Link></Col>
      <Col className="nav-col"><Nav.Link href="#link" ><p className="header-links">Link2</p></Nav.Link></Col>
      </Row> */}
      
    </Nav>
  </Navbar.Collapse>
  <IconContext.Provider value={{ className: "top-react-icons" }}>
    <FaBars value={{color:"white" , fontSize:"5rem" ,marginLeft:"4rem" , marginTop:"2rem" , opacity:"0"}}/>
  </IconContext.Provider>
</Navbar>
      
       </div>
    );
  };

export default Header
