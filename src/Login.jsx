import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let [list, setList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  let logindeatails = async () => {
    let url = `http://localhost:3001/login`;
    let response = await axios.get(url);
    list = [...response.data];
    setList(list);

    list.map((item) => {
      //console.log(item.uname);
      if (item.email === email && item.upass === pass) {
        console.log("hello");
      }
    });
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button onClick={() => logindeatails()} type="submit">
          Log In
        </button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
