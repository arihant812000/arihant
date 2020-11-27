import React ,{useState} from 'react';
import './Navbar.css';
import {Navbar, Nav } from "react-bootstrap";

import { Link} from "@reach/router";
const Navbars = props => {
  const [expanded, setExpanded] = useState(false);
  
  const NavLink = props => {
    return(<Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "#f1c40f" : "#fff"
          }
        };
      }}
    />
  )}
 
  return(
  

  

  <Navbar collapseOnSelect={false} style={{background:"#00004d"}} expand="lg" className="navbar" sticky="top"
  expanded={expanded}
  >
  <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}><i className="fa fa-align-justify" style={{color:"#fff"}}></i></Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" className="navitm">
      <Nav.Link as={NavLink} to="/" className="link" onClick={() => setExpanded(false)}>Home</Nav.Link>
      <Nav.Link as={NavLink} to="/schedule" className="link" onClick={() => setExpanded(false)}>Schedule</Nav.Link>
      <Nav.Link as={NavLink} to="/register" className="link" onClick={() => setExpanded(false)}>Register</Nav.Link>
      <Nav.Link as={NavLink} to="/problemStatement" className="link" onClick={() => setExpanded(false)}>Problem Statement</Nav.Link>
      <Nav.Link as={NavLink} to="/faq" className="link" onClick={() => setExpanded(false)}>FAQ</Nav.Link>
      <Nav.Link as={NavLink} to="/team" className="link" onClick={() => setExpanded(false)}>Team</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


);
}

  

export default Navbars;
