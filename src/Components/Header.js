import React, {Component} from 'react';
import {FormControl, Navbar, Container, Form, Button, Nav} from "react-bootstrap";
import logo from './logo192.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="mr-sm-2">
                        <img
                            src={logo}
                            alt="Logo"
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Form className="d-flex justify-content-between gap-2">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        );
    }
}