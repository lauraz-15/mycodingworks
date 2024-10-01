import "./Navbar.css";
import logo from "../../assets/logo_laura.png";
import burgerOpen from "../../assets/menu_open.svg";
import burgerClose from "../../assets/menu_close.svg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef } from "react";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  function openMenu() {
    menuRef.current.style.right = "0";
  }

  function closeMenu() {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <img src={burgerOpen} onClick={openMenu} alt="burger menu open" className="burger-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={burgerClose} onClick={closeMenu} className="menu-close-btn" alt="close-menu" />
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <AnchorLink className="anchor-link" href="#hero">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
          <AnchorLink className="anchor-link" href="#about">
            <p>About me</p>
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("portfolio")} className={menu === "portfolio" ? "active" : ""}>
          <AnchorLink className="anchor-link" href="#work">
            {" "}
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="anchor-link" href="#contact">
            {" "}
            <p>Contacts</p>
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className="anchor-link" href="#contact">
        <div className="nav-connect">Connect with me</div>
      </AnchorLink>
    </div>
  );
}

export default Navbar;
