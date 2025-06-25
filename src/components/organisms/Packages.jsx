import React, { useState } from 'react';
import PackageCard from '../atoms/PackageCard';
import '../../styles/packages.css';
import heroImage from '../../assets/hero.webp';

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const packages = [
    {
      id: 1,
      type: 'exteriores',
      image: heroImage, 
      title: 'Gold 200',
      description: 'Promoción especial para eventos en exteriores'
    },
    {
      id: 2,
      type: 'exteriores',
      image: heroImage,
      title: 'DJ & Pista LED',
      description: 'Promoción con pista LED incluida'
    },
    {
      id: 3,
      type: 'interiores',
      image: heroImage,
      title: 'Platinum 200',
      description: 'Promoción para eventos en interiores'
    },
    {
      id: 4,
      type: 'exteriores',
      image: heroImage,
      title: 'Sesiones Fotográficas',
      description: 'Sesiones profesionales en locación'
    },
    {
      id: 5,
      type: 'interiores',
      image: heroImage,
      title: 'Entelado',
      description: 'Decoración con telas y luces'
    },
    {
      id: 6,
      type: 'interiores',
      image: heroImage,
      title: 'Básico 200',
      description: 'Paquete básico para eventos'
    }
  ];

  const filteredPackages = activeFilter === 'todos' 
    ? packages 
    : packages.filter(pkg => pkg.type === activeFilter);

  return (
    <section className="packages-section" data-aos="fade-up">
      <h2 className="packages-title">Paquetes</h2>
      
      <div className="packages-filters">
        <button 
          className={`filter-button ${activeFilter === 'todos' ? 'active' : ''}`}
          onClick={() => setActiveFilter('todos')}
        >
          Todos ({packages.length})
        </button>
        <button 
          className={`filter-button ${activeFilter === 'exteriores' ? 'active' : ''}`}
          onClick={() => setActiveFilter('exteriores')}
        >
          Exteriores ({packages.filter(pkg => pkg.type === 'exteriores').length})
        </button>
        <button 
          className={`filter-button ${activeFilter === 'interiores' ? 'active' : ''}`}
          onClick={() => setActiveFilter('interiores')}
        >
          Interiores ({packages.filter(pkg => pkg.type === 'interiores').length})
        </button>
      </div>

      <div className="packages-grid">
        {filteredPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            image={pkg.image}
            title={pkg.title}
            description={pkg.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Packages; 