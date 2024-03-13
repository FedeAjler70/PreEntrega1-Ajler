import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (<Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home" id='BrandName'>Secur-IT</Navbar.Brand>
        <Nav className="me-auto">
         <Nav.Link href="#home">Cámaras HDCVI</Nav.Link>
         <Nav.Link href="#features">Cámaras IP</Nav.Link>
         <Nav.Link href="#pricing">DVRs</Nav.Link>
         <Nav.Link href="#pricing">NVRs</Nav.Link>
        </Nav>
    <CartWidget />
    </Container>
    </Navbar>

    );
};