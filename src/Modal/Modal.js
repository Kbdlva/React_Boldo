import React from "react";
import "./Modal.css"

const Modal = ({ active, setActive, handleLogin }) => {
    let token, user = null;

    async function login() {

        var nameInput = document.getElementById("fname")
        var passInput = document.getElementById("userPass")
        nameInput = nameInput.value
        passInput = passInput.value
        localStorage.setItem('is_name', nameInput);
        localStorage.setItem('is_password', passInput)
        console.log(localStorage.getItem('is_name'))

        let loginResponse = await fetch("/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ username: "admin", password: "admin" }),
        })
        loginResponse = await loginResponse.json();
        token = loginResponse.token;
        localStorage.setItem('token', token);
        let userResponse = await fetch("/user/1", {
            headers: {
                "Content-Type": "text/plain",
                Authorization: `Bearer ${token}`,
            },
        })
        userResponse = await userResponse.json();
        user = userResponse.user;
        handleLogin(user);

    }
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
                            <input className="pass_in" type="password" id="userPass" name="password" placeholder="Password" minLength={8} required />
                        </form>
                        <button className="btn btn-basic" onClick={() => login()} >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
