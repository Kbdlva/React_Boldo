import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ active, setActive }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState(null);
  async function login() {
    await fetch("/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username: "admin", password: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
      });
    await fetch("/user/1", {
      headers: {
        "Content-Type": "text/plain",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {setUser(data)});
  }

  return (
    <div
      className={active ? "popup active" : "popup"}
      onClick={() => setActive(false)}
    >
      <div className="popup_body">
        <div
          className={active ? "popup_content active" : "popup_content"}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="popoup_title">
            <h1>Login</h1>
          </div>
          <div className="popup_fields">
            <button className="btn btn-dark">Username</button>
            <button className="btn btn-dark">Password</button>
            <button className="btn btn-basic" onClick={() => login()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
