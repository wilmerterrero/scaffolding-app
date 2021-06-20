import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/auth/context";

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Hello {user?.email}</h1>
    </div>
  );
};

export default Dashboard;
