import TextTitle from '../atoms/TextTitle';

const DivBackground = ({ src, titulo, descripcion }) => {
  return (
    <div
      className="divbackground"
      style={{ backgroundImage: `url(${src})` }}
    >
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
