// src/components/templates/MainTemplate.jsx
import Hero from '../organisms/Hero';
import Packages from '../organisms/Packages';
import Gallery from '../organisms/Gallery';
import Footer from '../organisms/Footer';

const MainTemplate = () => {
  return (
    <>
      <Hero />
      <Packages />
      <Gallery />
      <Footer />
    </>
  );
};

export default MainTemplate;
