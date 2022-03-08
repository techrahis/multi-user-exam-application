import React from "react";
import { useLoginContext } from "../context/LoginContext";
import StudentDash from "./Student/StudentDash";
import InstituteDash from "./Institute/InstituteDash";
function Dashboard() {
  const { data } = useLoginContext();
  console.log(data);

  return (
    <div>
      {data.accountType === "Student" && <StudentDash />}
      {data.accountType === "Institute" && <InstituteDash />}
    </div>
  );
}

export default Dashboard;
