import logoNucuSoft from '../../img/LogoEmpresaNucuSoft/logoNucuSoft.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <p>Equipo de Desarrollo en Técnología de la Información</p>
          </div>
          <div className="footer-logo">
            <img 
              src={logoNucuSoft} 
              alt="NucuSoft - Desarrollo de Software" 
              className="footer-logo-img"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 