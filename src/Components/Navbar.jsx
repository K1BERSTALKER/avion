import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

import { navLinks } from "../data/index.js";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [bars, setBars] = useState(true);
  return (
    <nav className="nav">
      <div className="nav__head">
        <FiSearch
          onClick={() => {
            setSearch(!search);
          }}
          className="nav__search nav__icon"
        />

        <Link to={"/"} className="nav__logo">
          Avion
        </Link>

        <div className="nav__icons">
          <Link to={"/basket"}>
            <IoCartOutline className="nav__cart nav__icon hide__onMobile" />
          </Link>
          <CgProfile className="nav__profile nav__icon hide__onMobile" />
          {bars ? (
            <FaBars
              className="hide__onTablet nav__bars nav__icon"
              onClick={() => {
                setBars(!bars);
              }}
            />
          ) : (
            <RiCloseLine
              className="hide__onTablet nav__bars nav__icon"
              onClick={() => {
                setBars(!bars);
              }}
            />
          )}
        </div>
      </div>
      <div className="nav__hr"></div>
      <ul className="hide__onMobile nav__links">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav__link">
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className={bars ? "nav__barsContainer" : "nav__barsContainer active"}
      >
        <ul className="nav__barsLinks">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.path} className="nav__link">
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav__barsIcons">
          <Link to={"/basket"}>
            <IoCartOutline
              className="nav__cart nav__icon"
              onClick={() => {
                setBars(!bars.active);
              }}
            />
          </Link>
          <CgProfile className="nav__profile nav__icon " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
