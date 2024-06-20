import Card from '../Card';
import { Link } from 'react-router-dom';
import data from '../../../data.json';

function Gallery() {
  return (
    <section className="gallery">
      {data.map((accomodation) => (
        <Link
          to={`/accomodation/${accomodation.id}`}
          key={accomodation.id}
          className="gallery__link"
        >
          <Card title={accomodation.title} image={accomodation.cover} />
        </Link>
      ))}
    </section>
  );
}

export default Gallery;
