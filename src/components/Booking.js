// src/components/Booking.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Booking = () => {
  const { vehicleId } = useParams();
  const [rentalDuration, setRentalDuration] = useState("");
  const [vehicle, setVehicle] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicle = async () => {
      const vehicleDoc = await getDoc(doc(db, "vehicles", vehicleId));
      setVehicle(vehicleDoc.data());
    };

    fetchVehicle();
  }, [vehicleId]);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        userId: user.uid,
        vehicleId,
        rentalDuration,
        createdAt: new Date()
      });
      navigate("/checkout");
    } catch (error) {
      console.error("Error booking vehicle: ", error);
    }
  };

  if (!vehicle) return <div>Loading...</div>;

  return (
    <div className="booking">
      <h2>Book {vehicle.name}</h2>
      <img src={vehicle.image} alt={vehicle.name} />
      <p>{vehicle.description}</p>
      <p>Price: ${vehicle.price} per day</p>
      <form onSubmit={handleBooking}>
        <input
          type="number"
          value={rentalDuration}
          onChange={(e) => setRentalDuration(e.target.value)}
          placeholder="Rental Duration (days)"
        />
        <button type="submit">Proceed to Checkout</button>
      </form>
    </div>
  );
};

export default Booking;
