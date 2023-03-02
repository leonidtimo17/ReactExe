import logo from './Components/logo.svg';
import './App.css';
import React from "react";
import {FormControl, Navbar, Container, Form, Button, Nav, ModalFooter} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Content from "./Components/Content";


function App() {
  return (
      <div>
          <Header />
          <Content />
      </div>
  );
}

export default App;
