import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import logo_nav from '../../images/logo_nav.png'

/**
 * Barre de navigation
 */
const Navigation = () => {

    return (
    <div>
        <Navbar className="navbar fixed-top navbar-light" bg="light" expand="xl">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="Logo de Fox'Pro"
                        src={logo_nav}
                        width="30"
                        height="30"
                        className="d-inline-block align-top logo"
                    />{' '}
                    Le Monde
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Actualité</Nav.Link>
                        <Nav.Link href="france">France</Nav.Link>
                        <Nav.Link href="monde">International</Nav.Link>
                        <Nav.Link href="economie">Économie</Nav.Link>
                        <Nav.Link href="politique">Politique</Nav.Link>
                        <Nav.Link href="sciences">Sciences</Nav.Link>
                    </Nav>
                
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </div>)
}

export default Navigation;