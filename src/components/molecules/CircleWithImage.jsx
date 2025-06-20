// src/components/molecules/CircleWithImage.jsx
const CircleWithImage = ({ src, alt, href }) => (
    <div className="hero-icon-circle">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={alt} />
        </a>
      ) : (
        <img src={src} alt={alt} />
      )}
    </div>
  );
  
  export default CircleWithImage;
  