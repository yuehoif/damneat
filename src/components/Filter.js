import React from "react";

const Filter = ({
  filters = [],
  selectedFilters = [],
  setSelectedFilters = () => {},
}) => {
  const handleChange = (evt) => {
    const value = evt.target.value;
    const isChecked = evt.target.checked;

    setSelectedFilters(
      isChecked
        ? selectedFilters.concat([value])
        : selectedFilters.filter((filter) => filter !== value)
    );
  };

  return (
    <div>
      {filters.map((filter) => {
        return (
          <div key={filter}>
            <label htmlFor={filter}>
              <input
                type="checkbox"
                id={filter}
                value={filter}
                checked={selectedFilters.includes(filter)}
                onChange={handleChange}
              />
              {filter}
            </label>
          </div>
        );
      })}
      <div onClick={() => setSelectedFilters(filters)}>Select All</div>
      <div onClick={() => setSelectedFilters([])}>Unselect All</div>
    </div>
  );
};

export default Filter;
