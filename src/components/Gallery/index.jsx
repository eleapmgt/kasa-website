import Card from '../Card';
import { Link } from 'react-router-dom';
import data from '../../../data.json';

function Gallery() {
  return (
    <section className="gallery">
      {data.map((housing) => (
        <Link
          to={`/housing/${housing.id}`}
          key={housing.id}
          className="gallery__link"
        >
          <Card title={housing.title} image={housing.cover} />
        </Link>
      ))}
    </section>
  );
}

export default Gallery;
