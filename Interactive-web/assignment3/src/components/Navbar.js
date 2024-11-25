import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/memo-examples">Memo Examples</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/time">Time</Link>
    </nav>
  );
}

export default Navbar; 