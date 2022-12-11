import React from "react";
import Graph1 from "./component/Graph1";
import WeeklyBtn from "./component/WeeklyBtn";
import Footer from "./component/Footter";
import LastNav from "./component/LastNav";
import MiddleNav from "./component/MiddleNav";
import Nav from "./component/Nav";
import Weekly from "./component/Weekly";
import DateForWeek from "./DateForWeek";
const En_W_L = () => {
  return (
    <div>
      <Nav />
      <MiddleNav />
      <LastNav />
      <Weekly />
      <DateForWeek />
      <WeeklyBtn />
      <Graph1 />
      <Footer />
    </div>
  );
};

export default En_W_L;
