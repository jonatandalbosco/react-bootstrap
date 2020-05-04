import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
 .navbar {
   background-color: #222;
 }

 .navbar-brand, .navbar-nav .nav-link {
   color: #bbb;




  &:hover {
    color: #FFF;
  }
 }
 .d-flex-by-me {
   display: flex;
 }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Jonatan Developer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item className="d-flex-by-me">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/About">Sobre</Nav.Link>
            <Nav.Link href="/Contact">Contato</Nav.Link>
          </Nav.Item>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  </Styles>
)