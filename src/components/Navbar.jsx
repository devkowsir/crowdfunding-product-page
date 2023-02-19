import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/images/logo.svg" alt="crowdfund logo" />
      </div>
      <button className="navbar__toggler" type="button" onClick={menuToggle}>
        <img src={menuOpen ? '/images/icon-close-menu.svg' : '/images/icon-hamburger.svg'} alt="open menu" />
      </button>
      <ul className={`navbar__nav${menuOpen ? ' opened' : ''}`}>
        <li className="navbar__item">
          <a href="#discover" className="navbar__link" onClick={menuToggle}>
            Discover
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about" className="navbar__link" onClick={menuToggle}>
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="#get-started" className="navbar__link" onClick={menuToggle}>
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
