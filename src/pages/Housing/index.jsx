import { useParams } from 'react-router-dom';
import data from '../../../data.json';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
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
          style={{ width: '24px' }}
        />
      );
    }
    return stars;
  };

  const formatHostName = (name) => {
    const nameParts = name.split(' ');
    return `${nameParts[0]}\n${nameParts.slice(1).join(' ')}`;
  };

  return (
    <div className="housing">
      <Slideshow images={housing.pictures} />
      <section className="infos">
        <div className="infos__housing">
          <h2>{housing.title}</h2>
          <p>{housing.location}</p>
          <div className="infos__housing-tags">
            {housing.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="infos__host">
          <div className="infos__host-profile">
            <p>{formatHostName(housing.host.name)}</p>
            <img
              src={housing.host.picture}
              alt={`Photo de ${housing.host.name}`}
            />
          </div>
          <div className="infos__host-rating">
            {generateStars(housing.rating)}
          </div>
        </div>
      </section>
      <section className="description">
        <Collapse title="Description" text={housing.description} />
        <Collapse
          title="Équipements"
          text={
            <ul>
              {housing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>
    </div>
  );
}

export default Housing;
