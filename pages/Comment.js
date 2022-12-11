import React from "react";
import LittleBox from "./component/LittleBox";
import WeeklyBtn from "./component/WeeklyBtn";
import Footer from "./component/Footter";
import LastNav from "./component/LastNav";
import MiddleNav from "./component/MiddleNav";
import Nav from "./component/Nav";
import Weekly from "./component/Weekly";
import DateForWeek from "./DateForWeek";
import LittleBoxCommemt from "./component/LittleBoxComment";
const boxes = () => {
  return (
    <div>
      <Nav />
      <MiddleNav />
      <LastNav />
      <Weekly />
      <DateForWeek />
      <WeeklyBtn />
      <LittleBoxCommemt />
      <Footer />
    </div>
  );
};

export default boxes;
