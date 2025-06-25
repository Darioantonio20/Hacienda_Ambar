import { useState } from 'react';
import TextTitle from '../atoms/TextTitle';
import DivBackground from '../molecules/DivBackground';
import DivCard from '../molecules/DivCard';
import '../../styles/gallery.css';

import imgTest1 from '../../assets/imgTest1.jpg';
import imgTest2 from '../../assets/imgTest2.jpg';
import imgTest3 from '../../assets/imgTest3.jpg';
import imgTest4 from '../../assets/imgTest4.jpg';
import imgTest5 from '../../assets/imgTest5.jpg';
import imgTest6 from '../../assets/imgTest6.jpg';

const Gallery = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('sesiones');
  
  const recuerdosPorCategoria = {
    sesiones: [
      {
        id: 1,
        imagen: imgTest1,
        texto: 'Hay instantes que no se olvidan... solo se reviven.',
        descripcion:
          'En Hacienda Ámbar, cada sesión fotográfica se convierte en un momento mágico. Capturamos la esencia de tus momentos más especiales.',
        categoria: 'sesiones'
      },
      {
        id: 2,
        imagen: imgTest2,
        texto: 'Un día que recordarás por siempre.',
        descripcion: 'Sesiones fotográficas que cuentan historias y capturan emociones.',
        categoria: 'sesiones'
      },
      {
        id: 5,
        imagen: imgTest5,
        texto: 'Instantes que marcan la vida.',
        descripcion: 'Cada fotografía cuenta una historia única y especial.',
        categoria: 'sesiones'
      },
      {
        id: 4,
        imagen: imgTest4,
        texto: 'Revive los mejores momentos.',
        descripcion: 'Eventos inolvidables que crean recuerdos para toda la vida.',
        categoria: 'eventos'
      },
      {
        id: 6,
        imagen: imgTest6,
        texto: 'Donde el tiempo se detiene.',
        descripcion: 'Momentos capturados en el lugar perfecto.',
        categoria: 'sesiones'
      }
    ],
    eventos: [
      {
        id: 3,
        imagen: imgTest3,
        texto: 'Cada historia tiene su lugar perfecto.',
        descripcion: 'Celebra tus eventos más importantes en un espacio donde cada rincón cuenta una historia.',
        categoria: 'eventos'
      },
    ]
  };

  const [recuerdosActivos, setRecuerdosActivos] = useState(recuerdosPorCategoria.sesiones);

  const cambiarCategoria = (categoria) => {
    setCategoriaActiva(categoria);
    setRecuerdosActivos(recuerdosPorCategoria[categoria]);
  };

  const cambiarFondo = (index) => {
    const seleccionado = recuerdosActivos[index];
    const nuevos = [seleccionado, ...recuerdosActivos.filter((_, i) => i !== index)];
    setRecuerdosActivos(nuevos);
  };

  return (
    <section className="galeria">
      <TextTitle className="gallery-section-title">Galería de recuerdos</TextTitle>
      
      <div className="gallery-filters">
        <button 
          className={`gallery-filter-btn ${categoriaActiva === 'sesiones' ? 'active' : ''}`}
          onClick={() => cambiarCategoria('sesiones')}
        >
          Sesiones fotográficas
        </button>
        <button 
          className={`gallery-filter-btn ${categoriaActiva === 'eventos' ? 'active' : ''}`}
          onClick={() => cambiarCategoria('eventos')}
        >
          Eventos
        </button>
      </div>

      <DivBackground
        src={recuerdosActivos[0].imagen}
        titulo={recuerdosActivos[0].texto}
        descripcion={recuerdosActivos[0].descripcion}
      />
      <div className="divcards-container">
        {recuerdosActivos.map((recuerdo, index) => (
          <DivCard
            key={recuerdo.id}
            src={recuerdo.imagen}
            alt={recuerdo.texto}
            onClick={() => cambiarFondo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
