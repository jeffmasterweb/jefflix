import React from 'react';
import { FooterBase } from './styles';
import jefflix from '../../assets/imagens/jefflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://jeffmasterweb.github.io/">
        <img src={jefflix} alt="Logo jefflix" style={{  width:'100px'}} />
      </a>
      <p>
        Criado com base nas aulas da web 
        {' '}
        <a href="https://jeffmasterweb.github.io/">
          Jeff Design
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
