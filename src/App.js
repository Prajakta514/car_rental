// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import VehicleList from "./components/VehicleList";
import Booking from "./components/Booking";
import Checkout from "./components/Checkout";
import BookingHistory from "./components/BookingHistory";
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/booking/:vehicleId" element={<Booking />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bookings" element={<BookingHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
