import React from "react";

const Restaurant = ({ restaurant, selectedRestaurant }) => {
  const { name, price, image, filters, url } = restaurant;
  return (
    <div
      style={{
        border:
          selectedRestaurant && selectedRestaurant.name === name
            ? "1px solid red"
            : "",
      }}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={name} width={327} height={327} />
      </a>
      <div>{name}</div>
    </div>
  );
};

export default Restaurant;
