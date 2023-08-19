import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Connection from "../components/Connection";
const Dashboard = (props) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="p-5">
      <Connection connections={props.connections} />
    </div>
  );
};

export default Dashboard;
