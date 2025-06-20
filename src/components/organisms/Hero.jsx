// src/components/organisms/Hero.jsx
import HeroTextBlock from '../molecules/HeroTextBlock';
import ImageWithText from '../molecules/ImageWithText';
import CircleWithImage from '../molecules/CircleWithImage';
import heroImage from '../../assets/hero.png';
import icon from '../../assets/iconLogo.png';
import circleIcon1 from '../../assets/Facebook.png';
import circleIcon2 from '../../assets/Instagram.png';
import circleIcon3 from '../../assets/WhatsApp.png';
import '../../styles/hero.css';

const Hero = () => (
  <section
    className="hero-section"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="hero-content">
      <HeroTextBlock />
    </div>

    <div className="hero-icons-container">
      <div className="hero-icon-block">
        <ImageWithText src={icon} alt="icono 1" text="Un recuerdo para siempre" />
        <CircleWithImage src={circleIcon1} alt="círculo 1" href="https://pagina1.com" />
      </div>

      <div className="hero-icon-block">
        <ImageWithText src={icon} alt="icono 2" text="El amor verdadero es cuando ambos piensan que son los afortunados" />
        <CircleWithImage src={circleIcon2} alt="círculo 2" href="https://pagina2.com" />
      </div>

      <div className="hero-icon-block">
        <ImageWithText src={icon} alt="icono 3" text="La respuesta es amor" />
        <CircleWithImage src={circleIcon3} alt="círculo 3" href="https://pagina3.com" />
      </div>
    </div>
  </section>
);

export default Hero;
