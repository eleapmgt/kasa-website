import Logo from '../../assets/white-logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
