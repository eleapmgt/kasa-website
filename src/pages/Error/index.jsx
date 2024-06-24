import { Link } from 'react-router-dom';
import Error404 from '../../assets/error404.png';

function Error() {
  return (
    <section className="error">
      <img src={Error404} alt="Erreur 404" className="error__image" />
      <h2 className="error__title">
        Oups ! La page que vous demandez n’existe pas.
      </h2>
      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error;
