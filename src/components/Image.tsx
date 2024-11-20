interface IProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const Image: React.FC<IProps> = ({ imageUrl, alt, className }) => {
  return <img src={imageUrl} alt={alt} className={className} />;
};

export default Image;
