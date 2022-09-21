import "./Footer.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  BsFillPeopleFill,
  BsImages,
  BsCameraFill,
  BsFillPersonFill,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <FaMapMarkedAlt size={30} />
      <BsFillPeopleFill size={30} />
      <div className="camera-button">
        <BsCameraFill size={54} />
      </div>
      <BsImages size={30} />
      <BsFillPersonFill size={30} />
    </div>
  );
};
export default Footer;
