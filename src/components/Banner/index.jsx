function Banner({ image, text, isDarkened }) {
  return (
    <div className={`banner ${isDarkened ? 'banner--darkened' : ''}`}>
      <img src={image} alt="Bannière" className="banner__image" />
      <h1 className="banner__text">{text}</h1>
    </div>
  );
}

export default Banner;
