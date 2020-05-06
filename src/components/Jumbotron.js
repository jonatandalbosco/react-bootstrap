import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import salaComputer from '../assets/salaComputer.jpg';
import './Jumbotron.css';

const Styles = styled.div`
  .jumbo {
    background: url(${salaComputer}) center center;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .jumbotron-fluid {
    margin: 0px !important;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  @media only screen and (max-width: 767px) {
    .jumbo {
      height: 250px;
    }
  }

`;



export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 className="animated fadeInRight">Bem Vindo</h1>
        <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
      </Container>
    </Jumbo>
  </Styles>
)