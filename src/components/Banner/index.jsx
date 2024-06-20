function Banner({ picture, text }) {
  return (
    <div className="banner">
      <img src={picture} alt="Bannière" />
      <h1>{text}</h1>
    </div>
  );
}

export default Banner;
