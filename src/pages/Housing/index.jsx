import { useParams } from 'react-router-dom';
import data from '../../../data.json';
import Slideshow from '../../components/Slideshow';
import { StarIcon } from '@heroicons/react/24/solid';

function Housing() {
  const { id } = useParams();
  const housing = data.find((item) => item.id === id);

  const generateStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <StarIcon
          key={i}
          className="star"
          fill={`${i <= rating ? '#FF6060' : '#E3E3E3'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="housing">
      <Slideshow images={housing.pictures} />
      <section className="infos">
        <div className="infos__housing">
          <h2>{housing.title}</h2>
          <p>{housing.location}</p>
          {housing.tags.map((tag, index) => (
            <span key={index} className="infos__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="infos__host">
          <p>{housing.host.name}</p>
          <img
            src={housing.host.picture}
            alt={`Photo de ${housing.host.name}`}
          />
          <div className="infos__host-rating">
            {generateStars(housing.rating)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Housing;
