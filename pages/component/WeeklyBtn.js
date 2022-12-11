import React from "react";
import Data from "./data/Data";

const WeeklyBtn = () => {
  return (
    <div className="btn-container">
      <ul className="row-btn">
        {Data.map((item) => {
          return (
            <li key={item.id}>
              <div className="btn">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeeklyBtn;
