import React from 'react';
import { FiPhone, FiInstagram, FiMapPin } from 'react-icons/fi';

import { SubHeading, GlassCard } from '../../components';
import { meal } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <video className="app__header-video" autoPlay loop muted>
      <source src={meal} type="video/mp4" />
    </video>

    <div className="app__wrapper_info">
      <SubHeading title="Sabores del mar en Claromeco" />
      <h1 className="app__header-h1">Resto Bar La Chicha</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Bienvenidos a Calma Chicha en el corazón costero de Claromeco. Disfrutá de pescados frescos del mar, mariscos y comida casera familiar. Los miércoles, sumate a nuestra experiencia única de Calma Sushi con productos locales.</p>
      <button type="button" className="custom__button">Ver Menú</button>
    </div>

    <div className="app__wrapper_img">
      <GlassCard intensity={3}>
        <div className="app__header-contact">
          <h3 className="contact-title">Reservás & Pedidos</h3>

          <div className="contact-item">
            <FiPhone className="contact-icon" />
            <div>
              <p className="contact-label">Llamanos</p>
              <a href="tel:+542246XXX-XXX" className="contact-link">+54 2246 XXX-XXX</a>
            </div>
          </div>

          <div className="contact-item">
            <FiInstagram className="contact-icon" />
            <div>
              <p className="contact-label">Seguinos</p>
              <a href="https://www.instagram.com/la.chicha.restobar/" target="_blank" rel="noopener noreferrer" className="contact-link">@la.chicha.restobar</a>
            </div>
          </div>

          <div className="contact-item">
            <FiMapPin className="contact-icon" />
            <div>
              <p className="contact-label">Ubicación</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">Claromeco, Buenos Aires</a>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  </div>
);

export default Header;
