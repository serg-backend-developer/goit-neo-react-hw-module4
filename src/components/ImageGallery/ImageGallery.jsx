import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ cards, onOpenModal }) => {
  return (
    <ul className={css.imgGallery}>
          {
              cards.map(card => (
                <li key={card.id} className={css.imgGalleryItem}>
                    <ImageCard {...card} onOpenModal={onOpenModal} />
                </li>
              ))
          }
    </ul>
  );
};

export default ImageGallery;