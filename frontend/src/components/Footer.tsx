import "./Footer.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  BsFillPeopleFill,
  BsImages,
  BsCameraFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/map">
        <FaMapMarkedAlt size={30} />
      </Link>
      <Link to="/events">
        <BsFillPeopleFill size={30} />
      </Link>
      <div className="camera-button">
        <BsCameraFill size={54} />
      </div>
      <Link to="artdex">
        <BsImages size={30} />
      </Link>
      <BsFillPersonFill size={30} />
    </div>
  );
};
export default Footer;
