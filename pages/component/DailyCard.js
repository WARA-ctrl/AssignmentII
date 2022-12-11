import React from "react";
import Data from "./data/Data";
const DailyCard = () => {
  return (
    <div className="card-container">
      <ul className="row">
        {Data.map((item) => {
          return (
            <li key={item.id}>
              <div className="card">
                <div className="card-title">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <h1>{item.numb}</h1>
                <h3>{item.unit}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DailyCard;
