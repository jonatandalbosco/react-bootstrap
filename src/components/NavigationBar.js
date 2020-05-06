import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Nav.css';
import './Media_767.css';


export const NavigationBar = () => (
  
    <Navbar expand="lg" >
      <Navbar.Brand href="/"><span className="animated fadeInRight">Jonatan Developer</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item className="d-flex-by-me animated fadeInRight" >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/About">Sobre</Nav.Link>
            <Nav.Link href="/Servicos">Servicos</Nav.Link>
            <Nav.Link href="/Contact">Contato</Nav.Link>
          </Nav.Item>
        </Nav>

      </Navbar.Collapse>

    </Navbar>

)