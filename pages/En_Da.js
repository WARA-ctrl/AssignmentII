import React from "react";
import Date from "./date";
import DailyCard from "./component/DailyCard";

import Footer from "./component/Footter";
import LastNav from "./component/LastNav";
import MiddleNav from "./component/MiddleNav";
import Nav from "./component/Nav";
import Weekly from "./component/Weekly";

const En_Da = () => {
  return (
    <div>
      <Nav />
      <MiddleNav />
      <LastNav />
      <Weekly />
      <Date />
      <DailyCard />
      <Footer />
    </div>
  );
};

export default En_Da;
