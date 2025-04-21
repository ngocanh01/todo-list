import React, { useState } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      {/* logo */}
      <div className="logo">
        todo<span>List</span>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      {/* Dialogue box Nav List */}
      {navOpen && (
        <div
          className="nav-box"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div className="nav-list-box">
            <Link className="nav-list-item-ham" to="/">
              Home
            </Link>
            <Link className="nav-list-item-ham" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-list-item-ham" to="/about">
              About
            </Link>
            <Link className="nav-list-item-ham" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Static List */}
      <div className="nav-list">
        <Link className="nav-list-item" to="/">
          Home
        </Link>
        <Link className="nav-list-item" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-list-item" to="/about">
          About
        </Link>
        <Link className="nav-list-item" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
