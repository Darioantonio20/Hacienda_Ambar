import React from 'react';
import '../../styles/team.css';
import ImgPerfilDario from '../../assets/Team/ImgPerfilDario.png';
import ImgPerfilCarlos from '../../assets/Team/ImgPerfilCarlos.jpeg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Darío Antonio Gutiérrez Álvarez",
      role: "Fullstack Developer - Ing. en Software",
      linkedin: "https://www.linkedin.com/in/dario-antonio/",
      github: "https://github.com/Darioantonio20",
      image: ImgPerfilDario
    },
    {
      id: 2,
      name: "Carlos Enrique Barriga Aguilar",
      role: "Frontend Developer - Ing. en Software",
      linkedin: "https://www.linkedin.com/in/carlos-enrique-barriga-aguilar-b32703267/",
      github: "https://github.com/CARLOS-ENRIQUE-BA",
      image: ImgPerfilCarlos
    },
    {
      id: 3,
      name: "Pedro Portillo Rodríguez",
      role: "Backend Developer - Ing. en Software",
      linkedin: "https://www.linkedin.com/in/pedro-portillo-rodriguez-b32703267/",
      github: "https://github.com/PedroPortilloRodriguez",
      image: "https://ui-avatars.com/api/?name=Pedro+Portillo&background=random"
    },
    {
      id: 4,
      name: "Alan Emanuel Díaz Coutiño",
      role: "Backend Developer - Ing. en Software",
      linkedin: "https://www.linkedin.com/in/alan-emmanuel-diaz-coutino-b32703267/",
      github: "https://github.com/AlanEmanuelDiazCoutino",
      image: "https://ui-avatars.com/api/?name=Alan+Diaz&background=random"
    },
    {
      id: 5,
      name: "Jorge Alexis Arredondo Juarez",
      role: "Analista de Requerimientos - Ing. en Software",
      linkedin: "https://www.linkedin.com/in/jorge-alexis-arredondo-juarez-b32703267/",
      github: "https://github.com/JorgeAlexisArredondoJuarez",
      image: "https://ui-avatars.com/api/?name=Jorge+Arredondo&background=random"
    }
  ];

  return (
    <section className="team-section">
      <h2 className="team-title">Nuestro Equipo de Desarrollo de TI</h2>
      <p className="team-subtitle">Conoce a los expertos detrás de Hacienda Ámbar</p>
      
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card" data-aos="fade-up" data-aos-delay={member.id * 100}>
            <div className="card-content">
              <div className="member-avatar">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
              
              {(member.linkedin || member.github) && (
                <div className="social-links">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link github">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 