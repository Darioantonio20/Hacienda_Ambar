import TextTitle from '../atoms/TextTitle';
import ImageAtom from '../atoms/ImageAtom';

const DivBackground = ({ src, titulo, descripcion }) => {
  return (
    <div className="divbackground">
      <div 
        className="background-image" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      <div className="overlay">
        <div className="text-content">
          <TextTitle>{titulo}</TextTitle>
          <p className="descripcion">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default DivBackground;
