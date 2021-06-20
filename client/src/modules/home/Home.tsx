import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/context";

const Home: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Hello World from Home</h1>
      {!user && <Link to="/signin">Sign In</Link>}
    </div>
  );
};

export default Home;
