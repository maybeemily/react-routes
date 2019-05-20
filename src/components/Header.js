import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/red">Red</Link> | &nbsp;
        <Link to="/blue">Blue</Link> | &nbsp;
        <Link to="/yellow">Yellow</Link>
      </nav>
    </header>
  );
}
