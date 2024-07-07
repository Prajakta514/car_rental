// src/components/BookingHistory.js
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchBookings = async () => {
      const bookingQuery = query(collection(db, "bookings"), where("userId", "==", user.uid));
      const bookingSnapshot = await getDocs(bookingQuery);
      setBookings(bookingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);

  return (
    <div className="booking-history">
      <h2>My Bookings</h2>
      {bookings.map(booking => (
        <div key={booking.id} className="booking-item">
          <p>Vehicle ID: {booking.vehicleId}</p>
          <p>Rental Duration: {booking.rentalDuration} days</p>
          <br/><br/>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;
