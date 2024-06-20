function Card({ title, image }) {
  return (
    <article className="card">
      <figure className="card__figure">
        <img src={image} alt={title} className="card__image" />
        <figcaption className="card__figcaption">{title}</figcaption>
      </figure>
    </article>
  );
}

export default Card;
