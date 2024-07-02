import { useState } from 'react';
import Arrow from '../../assets/arrow.svg';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrevClick = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 50);
  };

  const handleNextClick = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((nextClick) =>
        nextClick === images.length - 1 ? 0 : nextClick + 1
      );
      setFade(true);
    }, 50);
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
          className={`slideshow__image ${fade ? 'fade' : ''}`}
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
