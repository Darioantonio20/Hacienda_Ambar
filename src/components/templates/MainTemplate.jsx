// src/components/templates/MainTemplate.jsx
import Hero from '../organisms/Hero';
import Packages from '../organisms/Packages';
import Gallery from '../organisms/Gallery';
import Team from '../organisms/Team';

const MainTemplate = () => {
  return (
    <>
      <Hero />
      <Packages />
      <Gallery />
      <Team />
    </>
  );
};

export default MainTemplate;
