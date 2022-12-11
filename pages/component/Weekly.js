import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdSouth,
} from "react-icons/md";

const Weekly = () => {
  return (
    <>
      <div className="weekly">
        <div className="boxweek">
          <MdKeyboardArrowLeft />
          <div className="week">
            <span class="grid-item">M</span>
            <span class="grid-item">T</span>
            <span class="grid-item">W</span>
            <span class="grid-item">T</span>
            <span class="grid-item">F</span>
            <span class="grid-item">S</span>
            <span class="grid-item">S</span>
            <span class="grid-item">5</span>
            <span class="grid-item">6</span>
            <span class="grid-item">7</span>
            <span class="grid-item">8</span>
            <span class="grid-item">9</span>
            <span class="grid-item">10</span>
            <span class="grid-item">11</span>
          </div>
          <MdKeyboardArrowRight />

          <MdSouth id="down-arrow" />
          <small>Today</small>
        </div>
      </div>
    </>
  );
};

export default Weekly;
