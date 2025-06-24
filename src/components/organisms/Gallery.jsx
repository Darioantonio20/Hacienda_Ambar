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
  const [recuerdos, setRecuerdos] = useState([
    {
      id: 1,
      imagen: imgTest1,
      texto: 'Hay instantes que no se olvidan... solo se reviven.',
      descripcion:
        'En Hacienda Ámbar, cada celebración se transforma en una experiencia única. Luces, risas, abrazos y momentos que simplemente se quedan contigo.',
    },
    {
      id: 2,
      imagen: imgTest2,
      texto: 'Un día que recordarás por siempre.',
      descripcion: 'Rodeado de quienes amas, en un lugar que se quedará en tu memoria.',
    },
    {
      id: 3,
      imagen: imgTest3,
      texto: 'Cada historia tiene su lugar perfecto.',
      descripcion: 'Celebra en un espacio donde cada rincón cuenta una historia.',
    },
    {
      id: 4,
      imagen: imgTest4,
      texto: 'Revive los mejores momentos.',
      descripcion: 'Cada recuerdo es una historia que vale la pena contar.',
    },
    {
      id: 5,
      imagen: imgTest5,
      texto: 'Instantes que marcan la vida.',
      descripcion: 'Desde el primer saludo hasta el último abrazo.',
    },
    {
      id: 6,
      imagen: imgTest6,
      texto: 'Donde el tiempo se detiene.',
      descripcion: 'Un lugar, una fecha, y emociones que perduran.',
    },
  ]);

  const cambiarFondo = (index) => {
    const seleccionado = recuerdos[index];
    const nuevos = [seleccionado, ...recuerdos.filter((_, i) => i !== index)];
    setRecuerdos(nuevos);
  };

  return (
    <section className="galeria">
      <TextTitle className="gallery-section-title">Galería de recuerdos</TextTitle>
      <DivBackground
        src={recuerdos[0].imagen}
        titulo={recuerdos[0].texto}
        descripcion={recuerdos[0].descripcion}
      />
      <div className="divcards-container">
        {recuerdos.map((recuerdo, index) => (
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
