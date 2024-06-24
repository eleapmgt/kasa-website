import { useParams } from 'react-router-dom';
import data from '../../../data.json';
import Slideshow from '../../components/Slideshow';

function Housing() {
  const { id } = useParams();
  const housing = data.find((item) => item.id === id);

  return (
    <div className="housing">
      <Slideshow images={housing.pictures} />
    </div>
  );
}

export default Housing;
