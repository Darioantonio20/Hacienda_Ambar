import ImageAtom from '../atoms/ImageAtom';

const DivCard = ({ src, alt, onClick }) => {
  return (
    <div className="divcard" onClick={onClick}>
      <ImageAtom src={src} alt={alt} className="divcard-image" />
    </div>
  );
};

export default DivCard;
