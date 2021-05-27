import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './style.css';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="App-link" to={'/products'}>
          Go to list of products
        </Link>
      </header>
    </div>
  );
}
