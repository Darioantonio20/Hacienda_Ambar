// src/components/organisms/Hero.jsx
import HeroTextBlock from '../molecules/HeroTextBlock';
import ImageWithText from '../molecules/ImageWithText';
import SocialButton from '../molecules/SocialButton';
import heroImage from '../../assets/hero.png';
import icon from '../../assets/iconLogo.png';
import circleIcon1 from '../../assets/Facebook.png';
import circleIcon2 from '../../assets/Instagram.png';
import circleIcon3 from '../../assets/WhatsApp.png';
import '../../styles/hero.css';

const Hero = () => (
  <section className="hero-section">
    <div 
      className="hero-background"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    />
    <div className="hero-overlay" />
    
    <div className="hero-content">
      <HeroTextBlock />
    </div>

    <div className="hero-icons-container">
      {/* Primera fila: Iconos con texto */}
      <div className="icons-row">
        <div className="hero-icon-block" data-aos="fade-up" data-aos-delay="100">
          <ImageWithText src={icon} alt="icono 1" text="Un recuerdo para siempre" />
        </div>

        <div className="hero-icon-block" data-aos="fade-up" data-aos-delay="200">
          <ImageWithText src={icon} alt="icono 2" text="El amor verdadero es cuando ambos piensan que son los afortunados" />
        </div>

        <div className="hero-icon-block" data-aos="fade-up" data-aos-delay="300">
          <ImageWithText src={icon} alt="icono 3" text="La respuesta es amor" />
        </div>
      </div>

      {/* Segunda fila: Redes sociales */}
      <div className="social-icons-row" data-aos="fade-up" data-aos-delay="400">
        <div className="social-button-wrapper">
          <SocialButton 
            icon={circleIcon1}
            alt="Facebook Ámbar Hacienda"
            href="https://www.facebook.com/ambar.haciendamx/"
          />
        </div>
        <div className="social-button-wrapper">
          <SocialButton 
            icon={circleIcon2}
            alt="Instagram Ámbar Hacienda"
            href="https://www.instagram.com/ambar.haciendamx/"
          />
        </div>
        <div className="social-button-wrapper">
          <SocialButton 
            icon={circleIcon3}
            alt="WhatsApp Ámbar Hacienda"
            href="https://wa.me/529613668435"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
