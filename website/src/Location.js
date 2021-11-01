import React from "react";

const Location = () => {
  return (
    <div className="location">
      <div className="location-info">
        <article>
          <h4 className="item-title">ip address</h4>
          <span className="item-value">192.212.174.101</span>
        </article>
        <article>
          <h4 className="item-title">location</h4>
          <span className="item-value">Brooklyn, NY 10001</span>
        </article>
        <article>
          <h4 className="item-title">timezone</h4>
          <span className="item-value">UTC -5:00</span>
        </article>
        <article>
          <h4 className="item-title">ISP</h4>
          <span className="item-value">SpaceX Starlink</span>
        </article>
      </div>
    </div>
  );
};

export default Location;
