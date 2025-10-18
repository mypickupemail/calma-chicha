import React from 'react';

import { SubHeading, GlassCard } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { emoji, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-emoji" aria-hidden>
      {emoji}
    </div>
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: 'var(--color-golden)' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Premios y reconocimientos" />
      <h1 className="headtext__cormorant">Nuestros Logros</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img app__laurels_proof-container">
      {/* <div className="app__laurels_proof-badge">C</div> */}
      <GlassCard intensity={4} className="tight">
        <img src={images.proof} alt="calma_chicha_recognition" className="app__laurels_proof-img" />
      </GlassCard>
    </div>
  </div>
);

export default Laurels;
