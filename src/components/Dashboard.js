import React from "react";
import { useLoginContext } from "../context/LoginContext";
function Dashboard() {
  const { data } = useLoginContext();
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{JSON.stringify(data.userInfo)}</h2>
    </div>
  );
}

export default Dashboard;
