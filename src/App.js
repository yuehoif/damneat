import { useState } from "react";

import RestaurantList from "./components/RestaurantList";
import Filter from "./components/Filter";

import data from "./mock/data.json";

console.log("data", data);

const filters = data
  .flatMap(({ filters }) => filters)
  .reduce((allFilters, currentFilter) => {
    if (allFilters.includes(currentFilter)) {
      return allFilters;
    }
    return [...allFilters, currentFilter];
  }, []);
console.log("filters", filters);

function App() {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants = data.filter((restaurant) => {
    let isSelected = false;
    restaurant.filters.forEach((filter) => {
      if (selectedFilters.includes(filter)) {
        isSelected = true;
      }
    });
    return isSelected;
  });

  console.log("filteredRestaurant", filteredRestaurants);

  const handleClick = () => {
    const index = Math.floor(Math.random() * filteredRestaurants.length);
    setSelectedRestaurant(filteredRestaurants[index]);
  };

  return (
    <div>
      <div onClick={handleClick}>Damn Eat</div>
      <br />
      <Filter
        filters={filters}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <RestaurantList
        restaurants={filteredRestaurants}
        selectedRestaurant={selectedRestaurant}
      />
    </div>
  );
}

export default App;
