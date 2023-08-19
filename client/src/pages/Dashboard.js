import React from "react";
import Connection from "../components/Connection";
const Dashboard = (props) => {
  return (
    <div className="p-5">
      <Connection connections={props.connections} />
    </div>
  );
};

export default Dashboard;
