import React from "react";
import '../CSS/MyNav.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function MyNav() {
    return (
        <div>
            {/* <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home">La Collection</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                            <NavLink>
                                <i className='fs-4 text-dark m-1 bi bi-cart3'></i>
                            </NavLink>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className="Brand fs-4 fw-bold" href="#home">Clothing Gold</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" id="left-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                            <NavLink>
                                <i className='fs-4 text-light m-1 bi bi-cart3'></i>
                            </NavLink>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
// import React, { Component } from 'react'
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
// import '../CSS/MyNav.css'
// import { NavLink } from 'react-router-dom'
// export class MyNav extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                     <Container>
//                         <Navbar.Brand className="Brand" href="#home">Furnitchy</Navbar.Brand>
//                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                         <Navbar.Collapse id="responsive-navbar-nav">
//                             <Nav className="ms-auto" id="left-nav">
//                                 <NavLink className="nav-link" to="/">Home</NavLink>
//                                 <NavLink className="nav-link" to="/products">Products</NavLink>
//                                 <NavLink className="nav-link" to="/products/0/edit">Add Product</NavLink>
//                                 <NavLink className="nav-link" to="/login">Login</NavLink>
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//             </div>
//         )
//     }
// }
