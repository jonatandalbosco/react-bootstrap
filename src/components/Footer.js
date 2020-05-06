import React from 'react';
import './Footer.css';
import './Media_767.css';
import { BsPhone } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { BsReplyAllFill } from "react-icons/bs";
import { BsPhoneLandscape } from "react-icons/bs";



function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <h4><BsPhone /> Telefones</h4>
            <ul className="list-unstyled">
              <li><BsPhoneLandscape /> (51) 9 9614 6297</li>
              <li><BsPhoneLandscape /> (51) 9 9999 9999</li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-6">
            <h4><BsTools /> Serviços</h4>
            <ul className="list-unstyled">
              <li><BsReplyAllFill /> Criação de Sites</li>
              <li><BsReplyAllFill /> Hospedagem de Sites</li>
              <li><BsReplyAllFill /> SEO - Otimização de Sites</li>
              <li><BsReplyAllFill /> Layout 100% Responsivo</li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-6 footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Desenvolvido por JRD
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;