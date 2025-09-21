import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Claromeco, Buenos Aires</p>
        <p className="p__opensans">Argentina</p>
        <p className="p__opensans">+54 2246 XXX-XXX</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La mejor forma de crear recuerdos es compartiendo una buena mesa en familia.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.instagram.com/la.chicha.restobar/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
          <FiFacebook />
          <FiTwitter />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios</h1>
        <p className="p__opensans">Martes-Domingo:</p>
        <p className="p__opensans">19:00 - 00:00</p>
        <p className="p__opensans">Lunes:</p>
        <p className="p__opensans">Cerrado</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Resto Bar La Chicha - Calma Chicha. Todos los derechos reservados.</p>
    </div>

  </div>
);

export default Footer;
