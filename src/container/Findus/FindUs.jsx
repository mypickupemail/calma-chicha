import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encontranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Claromeco, Buenos Aires, Argentina</p>
        <p className="p__opensans">Teléfono: +54 2246 XXX-XXX</p>

        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0 1rem 0' }}>Horarios de Atención</p>
        <p className="p__opensans">Martes - Domingo: 19:00 - 00:00</p>
        <p className="p__opensans">Lunes: Cerrado</p>
        <p className="p__opensans">Calma Sushi: Miércoles 19:00 - 23:00</p>

        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0 1rem 0' }}>Servicios Adicionales</p>
        <p className="p__opensans">🚚 Delivery disponible</p>
        <p className="p__opensans">🎉 Catering para eventos</p>
        <p className="p__opensans">🍣 Calma Sushi: delivery y eventos especiales</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitanos</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
