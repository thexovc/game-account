import React, { useState } from "react";
import MainDash from "../../components/Dashboard/MainDash/MainDash";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import RightSide from "../../components/Dashboard/RigtSide/RightSide";
import Sidebar from "../../components/Dashboard/Sidebar";

import "./Dashboard.css";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(!false);

  const expandState = (state) => {
    setExpanded(state);
  };
  return (
    <div className="App bg-[#170727]">
      <div className="AppHead">
        <Navbar expandState={expandState} />
      </div>

      <div className="AppGlass bg-[#170727]">
        <Sidebar expandState={expanded} />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};

export default Dashboard;
