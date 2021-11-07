import React from "react";
import { useGlobalContext } from "./context";

const AddressInfo = () => {
  const { isLoading, addressData, error } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="location">
        <div className="location-info">
          <article>
            <h4 className="item-title">ip address</h4>
            <span className="item-value">-</span>
          </article>
          <article>
            <h4 className="item-title">location</h4>
            <span className="item-value">-</span>
          </article>
          <article>
            <h4 className="item-title">timezone</h4>
            <span className="item-value">-</span>
          </article>
          <article>
            <h4 className="item-title">ISP</h4>
            <span className="item-value">-</span>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="location">
      <div className="location-info">
        <article>
          <h4 className="item-title">ip address</h4>
          <span className="item-value">{addressData.ip}</span>
        </article>
        <article>
          <h4 className="item-title">location</h4>
          <span className="item-value">{addressData.location}</span>
        </article>
        <article>
          <h4 className="item-title">timezone</h4>
          <span className="item-value">UTC {addressData.timezone}</span>
        </article>
        <article>
          <h4 className="item-title">ISP</h4>
          <span className="item-value">{addressData.isp}</span>
        </article>
      </div>
    </div>
  );
};

export default AddressInfo;
