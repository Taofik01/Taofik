import "./styles.scss";
import {  FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import TaofikLogo from "../../assets/taofik.png";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

function NavBar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMenu = () => {
    setToggleIcon(false);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo" onClick={closeMenu}>
            <img src={TaofikLogo} className="navbar_image" />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link className="navbar_container_menu_links" to={item.to} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
