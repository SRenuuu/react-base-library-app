import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const HeaderSection: React.FC = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light"
                    className="header-section font-weight-bold my-1">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto text-center">
                        <LinkContainer to="/home">
                            <Nav.Link className="mx-5">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="mx-5">About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="mx-5">Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderSection;