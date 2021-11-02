import React, { useEffect } from "react";
import iconArrow from "./images/icon-arrow.svg";
import { useGlobalContext } from "./context";

const SearchAddress = () => {
  const { setAddress, fetchData, locationInfo, setLocationInfo } =
    useGlobalContext();
  const searchValue = React.useRef("");

  const searchAddress = () => {
    console.log(searchValue.current.value);
    setAddress(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    console.log(locationInfo);
    searchValue.current.value = "";
    // try {
    //   fetchData();
    //   searchValue.current.value = "";
    //   console.log(locationInfo);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="search-address">
      <h1>IP Address Tracker</h1>
      <form className="search-address-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          ref={searchValue}
          onChange={searchAddress}
        />
        <button className="btn" type="submit">
          <img src={iconArrow} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default SearchAddress;
