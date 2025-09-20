import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Nuestra Chef" />
      <h1 className="headtext__cormorant">Pasión y Excelencia</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Cocinar es mi forma de expresar amor y crear memorias que perduran en el tiempo.</p>
        </div>
        <p className="p__opensans">Nuestra chef galardonada ha participado en múltiples competencias y eventos gastronómicos de gran envergadura, llevando los sabores auténticos argentinos a nuevas alturas. Cada plato refleja años de experiencia, técnica refinada y sobre todo, el amor por nuestra tradición culinaria familiar.</p>
      </div>

      <div className="app__chef-sign">
        <p>Delfina</p>
        <p className="p__opensans">Chef Ejecutiva y Propietaria</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
