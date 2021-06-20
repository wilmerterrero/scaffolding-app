import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/context";

export default function SignIn() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const { signInUser } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e: React.FormEvent<Element>) {
    e.preventDefault();

    if (user.email === "" && user.password === "") return;

    signInUser(user);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
