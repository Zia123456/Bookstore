import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="Navbar">
    <ul className="navigation-container">
      <li>
        <Link className="linkStyle" to="/">
          Bookstore CMS
        </Link>
      </li>
      <li>
        <Link className="linkStyle" to="/">
          Books
        </Link>
      </li>
      <li>
        <Link className="linkStyle" to="/Categories">
          CATEGORIES
        </Link>
      </li>
    </ul>
    <div className="profile">profile</div>
  </nav>
);

export default Header;
