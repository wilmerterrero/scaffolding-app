import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  async function handleSubmit(e: React.FormEvent<Element>) {
    e.preventDefault();
    console.log(user);
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
      <Link to="/signin">Sign In</Link>
    </div>
  );
}
