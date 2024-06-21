function Banner({ image, text, isDarkened, page }) {
  return (
    <section className={`banner ${isDarkened && `banner--darkened-${page}`}`}>
      <img src={image} alt="Bannière" className="banner__image" />
      <h1 className="banner__text">{text}</h1>
    </section>
  );
}

export default Banner;
