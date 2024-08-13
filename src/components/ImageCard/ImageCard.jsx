import css from './ImageCard.module.css';

const ImageCard = ({ alt, urls: { small, regular }, likes, created_at, user: { name }, onOpenModal }) => {
  return (
      <div onClick={() => onOpenModal({ alt, regular, likes, created_at, name })} className={css.imgCard}>
      <img src={small} alt={alt} className={css.img} />
    </div>
  );
};

export default ImageCard;