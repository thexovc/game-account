import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  // const [toggle, setToggle] = useState(false)

  // const handleToggle = () => {
  //     setToggle(!toggle);
  // }

  // const variants = {
  //     open: {
  //         transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  //     },
  //     closed: {
  //         transition: { staggerChildren: 0.05, staggerDirection: -1 }
  //     }
  // }

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar">
      <span className="nav-logo">
        <div className="moralis">
          <h1>Matrix Games</h1>
        </div>
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink onClick={handleClick} to="/">
          Home
        </NavLink>
        <NavLink onClick={handleClick} to="/">
          Games
        </NavLink>
        <NavLink onClick={handleClick} to="/">
          Plans
        </NavLink>

        <NavLink onClick={handleClick} to="/">
          Contact Us
        </NavLink>

        <span
          style={{ textDecoration: "none" }}
          className="login"
          onClick={handleClick}
          to="/"
        >
          Log In
        </span>

        <span
          style={{ textDecoration: "none" }}
          className="signup"
          onClick={handleClick}
          to="/"
        >
          Sign Up
        </span>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
