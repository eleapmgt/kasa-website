import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
