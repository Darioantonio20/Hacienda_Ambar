import ImageAtom from '../atoms/ImageAtom';
import TextAtom from '../atoms/TextAtom';

const ImageWithText = ({ src, alt, text }) => (
  <div className="hero-icon-block">
    <ImageAtom src={src} alt={alt} />
    <TextAtom>{text}</TextAtom>
  </div>
);

export default ImageWithText;
