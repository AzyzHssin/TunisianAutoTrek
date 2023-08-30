import React from 'react';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="searchResults">
      {searchResults.map((car) => (
        <div key={car.id} className="searchResultItem">
          <h3>{car.carName}</h3>
          <p>{car.carDesc}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
