// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="navbar">
      <h3>Car-Bike Rentals</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        {user ? (
          <>
            <Link to="/bookings">My Bookings</Link>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
