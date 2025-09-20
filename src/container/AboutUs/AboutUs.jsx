import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">En Calma Chicha creemos que la comida es el lenguaje universal del amor. Cada plato que preparamos nace de recetas familiares transmitidas de generación en generación, combinadas con técnicas culinarias de vanguardia.</p>
        <button type="button" className="custom__button">Conocé Más</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Nacimos en el corazón de Claromeco con la visión de crear un espacio donde la gastronomía se encuentre con la calidez humana. Somos un nuevo sueño que cobra vida, construido sobre la pasión por la cocina y el deseo de compartir momentos únicos.</p>
        <button type="button" className="custom__button">Conocé Más</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
