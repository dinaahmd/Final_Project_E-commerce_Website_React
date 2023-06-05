import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function MyNav(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="Brand" href="#home">Furnitchy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav id="left-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </Nav>
                        {props.changable === "Login" ? (
                            <Nav className="ms-auto text-light">
                                <NavLink className="nav-link" to="/login">{props.changable}</NavLink>
                            </Nav>
                        ) : (
                                <Nav className="ms-auto text-light">
                                    <span> {props.changable}</span>
                                </Nav>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

