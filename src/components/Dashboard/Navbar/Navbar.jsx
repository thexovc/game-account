import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import image from "../../../assets/Dashboard/img1.png";
import Media from "react-media";

const Navbar = ({ expandState }) => {
  const [search, setSearch] = useState(false);

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

  const searchFunc = () => {
    setSearch(!search);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <div className="nav__logo">
        <Media queries={{ small: "(max-width: 768px)" }}>
          {(matches) =>
            matches.small ? (
              <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => {
                  setIsOpen(!isOpen);
                  expandState(isOpen);
                }}
              >
                <div className="bar"></div>
              </div>
            ) : null
          }
        </Media>
        <Media queries={{ small: "(max-width: 768px)" }}>
          {(matches) => (matches.small ? null : <h1>Matrix Games</h1>)}
        </Media>

        <div className="search__div">
          <FiSearch className="search__icon" onClick={searchFunc} />
          <Media queries={{ small: "(max-width: 768px)" }}>
            {(matches) =>
              matches.small ? (
                <>{search ? <input type="text" /> : null}</>
              ) : (
                <input type="text" />
              )
            }
          </Media>
        </div>
      </div>

      <div className="nav__is">
        <div className="nav__i">
          <span class="day">
            <p>10</p>
          </span>
          <BsCart className="icon cart" />
        </div>

        <div className="nav__i">
          <span class="day">
            <p>0</p>
          </span>
          <BsChatLeft className=" icon chat" />
        </div>

        <div className="nav__i">
          <span class="day">
            <p>19</p>
          </span>
          <BsBell className="icon bell" />
        </div>

        <div className="nav__profile">
          <div className="icon__profile">
            <img src={image} alt="profile" />
          </div>
          <p>Hi, kylax</p>
          <RiArrowDropDownLine className="icon dropdown" />
        </div>

        {/* <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
