import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import API from '../../services/Api';

function Card() {
  return (
    <div className="card">
      <header>
        <img src="" alt="img" />
        <hr />
        <h3>Product's name</h3>
      </header>
    </div>
  );
}

export default function Products() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function getForecast() {
      const response = await API.get('/WeatherForecast');
      const { status, data } = response;
      if (status === 200) {
        console.log('Vindo do .Net', data);
        setForecast(data);
      }
    }

    getForecast();
  }, []);

  return (
    <>
      <div className="container">
        <header>
          <Link className="back" to={'/'}>
            Back to home
          </Link>
          <h2>List of Products</h2>
          <Link className="create" to={'/create-product'}>
            Create
          </Link>
        </header>
        <section>
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </>
  );
}
