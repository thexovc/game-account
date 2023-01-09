import React, { useEffect, useState } from "react";
import MainDash from "../../components/Dashboard/MainDash/MainDash";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import RightSide from "../../components/Dashboard/RigtSide/RightSide";
import Sidebar from "../../components/Dashboard/Sidebar";
import { supabase } from '../../config/supabaseClient'

import "./Dashboard.css";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(!false);

  const expandState = (state) => {
    setExpanded(state);
  };

  const updateUser = async () => {

    try {

      const { data: { user }, error } = await supabase.auth.getUser()

      console.log(user)

      if (error) {
        throw error

      }
      if (user) {
        const { data, error } = await supabase
          .from("user_info")
          .update({ uid: user.id })
          .eq('email', user.email)
          .select()
          .single()

        console.log(data)
      }

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {

    updateUser()
  }, [])


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
