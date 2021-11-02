import React, { useState, useContext, useEffect, useCallback } from "react";
const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [locationInfo, setLocationInfo] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}&ipAddress=${address}`);
      const data = await response.json();
      const newLocationInfo = {
        ip: data.ip,
        location: `${data.location.city}, ${data.location.country} ${data.location.postalCode}`,
        timezone: data.location.timezone,
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng,
      };
      setLocationInfo(newLocationInfo);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ setAddress, fetchData, locationInfo, setLocationInfo }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
