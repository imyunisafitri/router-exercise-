import { NavLink } from "react-router-dom";
import logo from "./main-logobesar.png";

console.log(logo);

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" style={{width: '100px'}}/>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/stories">MIRACLE STORIES</NavLink>
        <NavLink to="/services">SERVICES</NavLink>
        <NavLink to="/doctor">DOCTOR</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
