import React from 'react';
import useMouseFollow3D from '../../hooks/useMouseFollow3D';
import './GlassCard.css';

const GlassCard = ({ children, className = '', intensity = 15 }) => {
  const { ref, transform, onMouseMove, onMouseLeave, onMouseEnter } = useMouseFollow3D(intensity);

  return (
    <div
      ref={ref}
      className={`glass-card-3d ${className}`}
      style={{ transform }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
};

export default GlassCard;