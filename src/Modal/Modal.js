import React from "react";
import "./Modal.css"
// import { useState } from "react";

const Modal = ({ active, setActive, handleLogin }) => {
    let token, userName = null;

    async function login() {
        let loginResponse = await fetch("/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ username: "admin", password: "admin" }),
        })
        loginResponse = await loginResponse.json();
        token = loginResponse.token;
        let userResponse = await fetch("/user/1", {
            headers: {
                "Content-Type": "text/plain",
                Authorization: `Bearer ${token}`,
            },
        })
        userResponse = await userResponse.json();
        userName = userResponse.user.username;
        handleLogin(userName);

    }

    //1 request to login 
    // get token and save it
    // request /user/1
    // get user data and save it
    // display in header 

    return (
        <div className={active ? "popup active" : "popup"} onClick={() => setActive(false)}>
            <div className='popup_body' >
                <div className={active ? "popup_content active" : "popup_content"} onClick={e => e.stopPropagation()}>
                    <div className='popoup_title'>
                        <h1>Login</h1>
                    </div>
                    <div className='popup_fields'>

                        <form className="formLogin">
                            <label htmlFor="fname"></label>
                            <input type="text" id="fname" name="fname" placeholder="Username" /><br></br>
                            <label htmlFor="pass"></label>
                            <input className="pass_in" type="password" name="password" placeholder="Password" minLength={8} required />
                        </form>
                        {/* {username} */}

                        <button className="btn btn-basic" onClick={() => login()} >Login</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;