import React from 'react';
import { SubHeading, GlassCard } from '../../components';
import { images } from '../../constants';
import './SushiSpecial.css';

const SushiSpecial = () => (
  <div className="app__sushi-special app__bg flex__center section__padding">
    <div className="app__sushi-special-content">
      <SubHeading title="Calma Sushi" />
      <h1 className="headtext__cormorant">Sushi Fresco los Miércoles</h1>

      <div className="app__sushi-special-info">
        <p className="p__opensans">
          Todos los miércoles y en eventos especiales, Calma Chicha se transforma en <strong>Calma Sushi</strong>.
          Delfina prepara sushi fresco en el momento con los mejores productos del mar de Claromeco.
        </p>

        <div className="app__sushi-special-features">
          <div className="app__sushi-special-feature">
            <h3 className="p__cormorant">🍣 Preparado al Momento</h3>
            <p className="p__opensans">Cada pieza de sushi se prepara fresca mientras esperás</p>
          </div>

          <div className="app__sushi-special-feature">
            <h3 className="p__cormorant">🐟 Pescado Local</h3>
            <p className="p__opensans">Utilizamos pescado fresco de las aguas de Claromeco</p>
          </div>

          <div className="app__sushi-special-feature">
            <h3 className="p__cormorant">🚚 Delivery & Catering</h3>
            <p className="p__opensans">Disponible para delivery y eventos especiales</p>
          </div>
        </div>

        <div className="app__sushi-special-schedule">
          <p className="p__cormorant" style={{ color: 'var(--color-golden)', marginBottom: '1rem' }}>
            Horarios Especiales
          </p>
          <p className="p__opensans">📅 Todos los Miércoles: 19:00 - 23:00</p>
          <p className="p__opensans">🎉 Eventos y Catering: Consultar disponibilidad</p>
        </div>

        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>
          Reservar Calma Sushi
        </button>
      </div>
    </div>

    <div className="app__sushi-special-image">
      <GlassCard intensity={6} className="tight">
        <img src={images.delfi} alt="chef_delfi_sushi" />
      </GlassCard>
    </div>
  </div>
);

export default SushiSpecial;
