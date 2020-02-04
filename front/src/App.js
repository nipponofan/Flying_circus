import React, { useState, useEffect } from "react";
import axios from "axios";

import TourCard from "./component/TourCard";
import "./App.css";

const App = () => {
  const [tour, setTour] = useState([]);
  const [representation, setRepresentation] = useState([]);
  const [tour_name, setTour_name] = useState("Les 5 doigts de la main");

  const handlerepresentation = async tour_name => {
    const result = await axios
      .get(`http://localhost:4000/wild_flying_circus/${tour_name}`)
      .then(res => {
        setTour_name(result.res.data);
        console.log(res.data);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:4000/wild_flying_circus/tours").then(res => {
      setTour(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <>
        {tour.map(tourItem => (
          <TourCard
            key={tourItem.id}
            name={tourItem.name}
            date_start={tourItem.date_start}
            date_end={tourItem.date_end}
            handlerepresentation={handlerepresentation()}
          />
        ))}
      </>
    </div>
  );
};

export default App;
