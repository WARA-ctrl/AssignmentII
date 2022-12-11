import React from "react";
import { FaHome, FaChevronDown, FaSlidersH } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
      <nav className="blank-nav">
        <FaHome className="blank-nav-home-btn" />
        <h3 className="all">
          All Report
          <FaChevronDown />
        </h3>

        <FaSlidersH className="blank-nav-fix-btn" />
      </nav>
    </div>
  );
};

export default Nav;
