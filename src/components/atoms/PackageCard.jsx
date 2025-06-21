import React from 'react';
import Atropos from 'atropos/react';
import 'atropos/css';
import '../../styles/packageCard.css';

const PackageCard = ({ image, title, description }) => {
  return (
    <div className="w-64 m-6">
      <Atropos
        className="game-box"
        rotateTouch="scroll-y"
        highlight={true}
        shadow={true}
        shadowScale={0.8}
        duration={300}
        activeOffset={40}
        rotateXMax={15}
        rotateYMax={15}
      >
        
        {/* Imagen de fondo */}
        <img 
          className="game-box-bg" 
          src={image}
          alt={title}
          data-atropos-offset="-4"
        />

        {/* Logo o título */}
        <div 
          className="game-box-logo" 
          data-atropos-offset="2.5"
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        {/* Bordes de la caja */}
        <span className="game-box-t"></span>
        <span className="game-box-r"></span>
        <span className="game-box-b"></span>
        <span className="game-box-l"></span>
      </Atropos>
    </div>
  );
};

export default PackageCard; 