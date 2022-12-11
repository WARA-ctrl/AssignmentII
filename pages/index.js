import Link from "next/link";
import DailyCard from "./component/DailyCard";
import Footer from "./component/Footter";
import LastNav from "./component/LastNav";
import MiddleNav from "./component/MiddleNav";
import Nav from "./component/Nav";
import Weekly from "./component/Weekly";
import Date from "./date";

export default function Home() {
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
}
