import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { BsPhone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import salaComputer3 from './assets/salaComputer3.jpg';
import FadeIn from 'react-fade-in';


const Styles = styled.div`
  
  h4 {
    font-size: 25px;
    margin-bottom: 20px;
    text-align: start;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
  }
  .FadeIn {
    transition-duration: 20s !important;
    delay: 5s !important;
  }
  .p-col-7 {
    padding: 20px 20px;
    color: #222;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 10px 0 #333;
  }
  Button {
    background: #333 !important;
    border: 1px solid #333 !important;
    margin-bottom: 50px;
    width: 100%;

    &:hover {
      background: transparent !important;
      color: #333;
    }
  }
  .center {
    text-align: center;
  }
  .img-div:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 390px;
    right: -40px;
    top: -25px;
    background: #333;
    border-radius: 6px;
    z-index: -1;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
  }
  .img-div {
    background: url(${salaComputer3}) center center;
    background-size: cover;
    border-radius: 6px;
    position: relative;
    left: 20px;
  }
  .section-sobre {
    padding: 100px 0px;
    
  }
  span {
    color: #01afb6;
    font-weight: 900;
    letter-spacing: 1px;
  }
  hr {
    margin: 0px 0px 20px 0px;
    border: 1px solid #01afb6;
    width: 20%;
  }
  
  .section-servicos .card {
    text-align: center;
    box-shadow: 0 5px 10px 0 #333;
  }
  .section-servicos {
    padding: 100px 0px;
  }
  .section-servicos h2 {
    font-size: 40px;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }
  .section-servicos span {
    font-size: 40px !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    font-weight: 900 !important;
    text-align: center !important;
    font-family: 'Montserrat', sans-serif  !important;
  }
.card-title {
  color: #01afb6;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-top: 40px;
}
.card-body {
  height: 300px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.card-subtitle {
  margin-top: 25px
}
.section-contato h2 {
  font-size: 40px;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 900;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}
.section-contato h3 {
  font-size: 25px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: start;
  font-family: 'Montserrat', sans-serif;
}
.section-contato h4 {
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  margin: 0px;
  padding-top: 10px;
  text-align: start;
  color:  #01afb6;
  font-family: 'Montserrat', sans-serif;
}
.section-contato span {
  font-size: 40px !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  font-weight: 900 !important;
  text-align: center !important;
  font-family: 'Montserrat', sans-serif  !important;
}
.section-contato .form-control {
  margin-top: 10px !important;
}
.section-contato button {
  margin-top: 20px;
}
.contact-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.item-one {
  margin: 35px;
  font-size: 40px;
}
  @media only screen and (max-width: 767px) {
    .section-sobre {
      padding: 20px 0px !important;
    }
    h4 {
      font-size: 20px;
    }
    .p-col-7 {
      font-size: 14px !important;
    }
    .img-div {
      display: none;
    }
    .section-servicos h2  {
      font-size: 30px;
    }
    .section-servicos span   {
      font-size: 30px !important;
    }
    .section-contato h2  {
      font-size: 30px !important;
    }
    .section-contato h3  {
      font-size: 20px !important;
    }
    .section-contato h4  {
      font-size: 14px !important;
    }
    .section-contato span  {
      font-size: 30px !important;
    }
    .item-one {
      margin: 20px 20px 40px 20px !important
    }
    .section-servicos {
      padding: 40px 0px !important;
    }
    .card-text {
      font-size: 14px !important;
    }
    .card-body {
      height: 250px;
    }
    .card {
      margin-bottom: 20px;
    }
  }

`;

export const Home = () => (
  <Styles>
    <FadeIn>
    <section className="section-sobre">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <h4>Tudo<br></br><span>sobre mim</span></h4>
            <hr></hr>
            <p className="p-col-7">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. </p>
            <div className="center">
              <Button variant="secondary">Saiba mais</Button>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 img-div"></div>
        </div>
      </div>
    </section>
    </FadeIn>
    <FadeIn>
    <section className="section-servicos">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Servi<span>ços</span></h2>
          </div>
          <div className="col-lg-4 col-sm-4">
            <Card>
              <Card.Body>
                <Card.Title>Criação de Sites</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">100% Responsivo.</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Card.Link href="#"><Button variant="secondary">Saiba mais</Button></Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-4">
            <Card>
              <Card.Body>
                <Card.Title>Hospedagem de Sites</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tenha uma Navegação rápida.</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Card.Link href="#"><Button variant="secondary">Saiba mais</Button></Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-4">
            <Card>
              <Card.Body>
                <Card.Title>SEO</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Otimização do seu site 100% seguro.</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
    </Card.Text>
                <Card.Link href="#"><Card.Link href="#"><Button variant="secondary">Saiba mais</Button></Card.Link></Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
    <FadeIn>
    <section className="section-contato">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Formulário <span>de contato</span></h2>
          </div>
          <div className="col-lg-6">
            <Form>
            <h3>Entre em contato <br></br><h4>preencha o formulário:</h4></h3>
              <Form.Row>
                <div className="col-lg-12">
                  <Form.Control placeholder="Digite seu Nome" />
                </div>
                <div className="col-lg-12">
                  <Form.Control placeholder="Digite sua Cidade" />
                </div>
                <div className="col-lg-12">
                  <Form.Control placeholder="Digite seu E-mail" />
                </div>
                <div className="col-lg-12">
                  <Form.Control placeholder="Digite seu Telefone" />
                </div>
              </Form.Row>
              <Button variant="secondary">Enviar</Button>
            </Form>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center flex-column">
          <h2>Redes Sociais</h2>
            <div className="contact-info">  
              <div className="col-lg-4">
                <div className="item-one">
              <BsPhone />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item-one">
              <FaInstagram />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item-one">
              <FaWhatsapp   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
  </Styles>
)