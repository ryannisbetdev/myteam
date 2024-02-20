import Logo from '../assets/logo.svg';
import '../styles/layout.scss';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header__container">
        <img src={Logo} alt="myteam logo" className="header__logo" />

        <nav className="navigation__container">
            <button onClick={toggleMenu} className="header__icon material-symbols-outlined">menu</button>

            <div className={`navigation__overlay ${isMenuOpen ? '' : 'hide'}`}>
                <ul className="navigation">
                    <button onClick={toggleMenu} className="header__icon close material-symbols-outlined">close</button>
                    <li className="navigation__item"><a href="/" className="u-link">Home</a></li>
                    <li className="navigation__item"><a href="/about" className="u-link">About</a></li>
                    <li className="navigation__item"><button className="btn">Contact us</button></li>
                </ul>
            </div>

        </nav>
    </header>
  );
};

export default Header;
