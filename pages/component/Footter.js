import {
  IoIosSend,
  IoMdPie,
  IoMdSettings,
  IoIosCheckmarkCircle,
  IoMdOpen,
} from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <IoMdOpen />
        <li>Write</li>
      </ul>
      <ul>
        <IoIosCheckmarkCircle />
        <li>Approve</li>
      </ul>
      <ul>
        <IoIosSend />
        <li>Report</li>
      </ul>
      <ul className="footer-active">
        <IoMdPie />
        <li>Static</li>
      </ul>
      <ul>
        <IoMdSettings />
        <li>Setting</li>
      </ul>
    </div>
  );
};

export default Footer;
