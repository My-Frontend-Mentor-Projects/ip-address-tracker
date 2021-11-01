import React from "react";
import iconArrow from "./images/icon-arrow.svg";

const SearchAddress = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("jio");
  };
  return (
    <div className="search-address">
      <h1>IP Address Tracker</h1>
      <form className="search-address-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for any IP address or domain" />
        <button className="btn" type="submit">
          <img src={iconArrow} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default SearchAddress;
