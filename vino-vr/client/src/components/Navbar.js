import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Logo from '../images/vino-vr.png';
import '../styles/Navbar.css'
import { AuthContext } from '../utils/AuthContext'

function NavBar() {
  const { auth, setAuth } = useContext( AuthContext);

    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/" className="logoDiv">     
  <img
        alt="VinoVR logo"
        src={Logo}
        width="90"
        height="70"
        className="d-inline-block align-top logImg"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link href="/mood">Mood</Nav.Link>
      <Nav.Link href="/featured">Featured Wines</Nav.Link>
      <Nav.Link href="/Favorites">My Favorites</Nav.Link>
      <NavDropdown title="About" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://github.com/raposogiselle" target="_blank">Giselle</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/graceyangyxt" target="_blank">Grace</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/Luis0624" target="_blank">Luis</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/seanpweber" target="_blank">Sean</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://github.com/raposogiselle/React-vinoVR" target="_blank">Project Github</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="ml-auto">
      { !auth
        ? <>
        <Button variant="outline-success" size="sm" className="LoginButton" href="/signin" >
            Sign In
        </Button>
        
        <Button variant="outline-primary" size="sm" href="/signup">
            Sign Up
        </Button>
        </>
        : <Button variant="outline-danger" size="sm" onClick={ () => setAuth( false )}>
        Logout
      </Button>
      }
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )};

export default NavBar;
