import React from "react";
import Restaurant from "./Restaurant";

const RestaurantList = ({ restaurants = [], selectedRestaurant = {} }) => {
  return (
    <>
      <div>{restaurants.length}</div>
      <div>
        {restaurants.map((restaurant) => {
          return (
            <Restaurant
              key={restaurant.name}
              restaurant={restaurant}
              selectedRestaurant={selectedRestaurant}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantList;
