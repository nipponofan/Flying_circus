import React, { useState, useEffect } from "react";

const TourCard = ({ name, date_start, date_end, handlerepresentation }) => {
  return (
    <div className="CardList">
      <h1>{name}</h1>
      <p>{date_start}</p>
      <p>{date_end}</p>
      <input
        type="button"
        onClick={() => {
          handlerepresentation();
        }}
      ></input>
    </div>
  );
};

export default TourCard;
