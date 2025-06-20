import React from 'react';
import Atropos from 'atropos/react';
import 'atropos/css';

const SocialButton = ({ icon, alt, href }) => {
  return (
    <Atropos
      className="social-button-atropos"
      highlight={false}
      shadow={false}
      rotateXMax={15}
      rotateYMax={15}
      stretchX={10}
      stretchY={10}
    >
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-button-link"
      >
        <div className="social-button-container">
          <img 
            src={icon} 
            alt={alt} 
            className="social-button-icon"
            data-atropos-offset="5"
          />
        </div>
      </a>
    </Atropos>
  );
};

export default SocialButton; 