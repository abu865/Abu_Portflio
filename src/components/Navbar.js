import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "../components/navbar.css";
const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);

  const handleToggleClick = () => {
    setShowmenu(!showmenu);
    document.documentElement.classList.toggle("menu-open", showmenu);
  };

  return (
    <nav className="nav">
      <div className={`${showmenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active-nav" : "nav__link"
                  }
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav__toggle" onClick={handleToggleClick}></div>
    </nav>
  );
};
export default Navbar;
