import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/Dashboard/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Media from "react-media";

const Sidebar = ({ expandState }) => {
  const [selected, setSelected] = useState(0);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      {/* <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div> */}
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${!expandState}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <Media queries={{ small: "(max-width: 768px)" }}>
            {(matches) => (matches.small ? <h2>Matrix Games</h2> : null)}
          </Media>
        </div>

        <div className="menu ">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}

          <div className="need__help__div">
            <div className="need__help__content">
              <div className="need__help__icon">
                <FiArrowUpRight className="help__icon" />
              </div>
              <div className="need__help__text">
                <p>Do you need help?</p>
              </div>
            </div>
          </div>
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
