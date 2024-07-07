// src/components/VehicleList.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const vehicleCollection = collection(db, "vehicles");
      const vehicleSnapshot = await getDocs(vehicleCollection);
      setVehicles(vehicleSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchVehicles();
  }, []);

  return (
    <div className="vehicle-list">
      <h2>Available Vehicles</h2>
      {vehicles.map(vehicle => (
        <div key={vehicle.id} className="vehicle-item">
          <img src={vehicle.image} alt={vehicle.name} />
          <div>
          <h3>{vehicle.name}</h3>
          <p>{vehicle.description} . </p>
          <p>Price: Rs.{vehicle.price} per day </p>
          </div>
          <Link to={`/booking/${vehicle.id}`} className="book-now">Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
