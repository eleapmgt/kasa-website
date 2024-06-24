import { useState } from 'react';
import Arrow from '../../assets/arrow.svg';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((nextClick) => {
      return nextClick === images.length - 1 ? 0 : nextClick + 1;
    });
  };

  if (images.length === 1) {
    return (
      <section className="slideshow">
        <img src={images[0]} alt="Slide" className="slideshow__image" />
      </section>
    );
  }

  return (
    <>
      <section className="slideshow">
        <button
          className="slideshow__button slideshow__button--prev"
          onClick={handlePrevClick}
        >
          <img src={Arrow} alt="Image précédente" />
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow__image"
        />
        <button
          className="slideshow__button slideshow__button--next"
          onClick={handleNextClick}
        >
          <img src={Arrow} alt="Image précédente" />
        </button>
        <div className="slideshow__counter">
          {currentIndex + 1}/{images.length}
        </div>
      </section>
    </>
  );
}

export default Slideshow;
