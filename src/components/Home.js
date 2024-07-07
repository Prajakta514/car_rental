// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h2>Welcome to Car/Bike Rentals</h2>
        <p>Rent your favorite cars and bikes with ease and convenience.</p>
       
        <Link to="/vehicles" className="home-link">Browse Vehicles</Link>
      </div>
      <div className="home-info">
        <h4>Why Choose Us?</h4>
        <ul>
          <li>Wide range of vehicles to choose from</li>
          <li>Easy and secure booking process</li>
          <li>Affordable rental prices</li>
          <li>24/7 customer support</li>
        </ul>
         {/* <div className="home-images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvb2IbELp27oHjZqXzVDRhGJSitQHo8MnfaQ&s" alt="Car" />
          <img src="/images/bike.jpg" alt="Bike" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
