import { useContext } from "react";
import { UserContext } from "../App";
import { useState } from "react";
import './Profile.css'
import { useEffect } from "react";
import { Link } from 'react-router-dom';

let check = false;

const showForm = () => {
    if (check) {
        document.getElementById("aboutUser").style.display = "block";
        document.getElementById("editForm").style.display = "none";
        check = false;

    } else {
        document.getElementById("editForm").style.display = "flex";
        document.getElementById("aboutUser").style.display = "none";
        check = true;
    }
    console.log(check);
}






const Profile = (props) => {    
    const userContext = useContext(UserContext);

    const [userUserName, setUserUserName] = useState();
    const [userName, setUserName] = useState();
    const [userSurname, setSurname] = useState();
    const [userPassword, setUserPassword] = useState();

    useEffect(() => {
        setUserUserName(userContext.user.username)
        setUserName(userContext.user.name)
        setSurname(userContext.user.surname)
        setUserPassword(userContext.user.password)
    }, [])
    const saveChanges = async () => {
        let newUserName = document.getElementById("yourUserName")
        let newName = document.getElementById("yourName")
        let newSur = document.getElementById("yourSurname")
        let newPass = document.getElementById("userPass")
    
        newUserName = newUserName.value
        newName = newName.value
        newSur = newSur.value
        newPass = newPass.value
    
        localStorage.setItem('is_newUserName', newUserName);
        localStorage.setItem('is_newName', newName);
        localStorage.setItem('is_newNSur', newSur);
        localStorage.setItem('is_newPass', newPass)
    
    
        let saveUserName = localStorage.getItem('is_newUserName');
        console.log(saveUserName)
    
        let token = localStorage.getItem('token');
    
        let userResponse = await fetch("/user/1", {
            headers: {
                "Content-Type": "text/plain",
                Authorization: `Bearer ${token}`,
            },
            method: "PATCH",
            body: JSON.stringify({ username: newUserName, name: newName, surname: newSur, password: newPass }),
        })
        userResponse = await userResponse.json()
        userContext.setUser(userResponse)
        console.log("userCont", userContext)
        console.log("userResp", userResponse)
    
    
    }

    return (


        <div className="Prof">


            <header className="headerr">
                <div className='headContainer'>
                    <div className='header_body'>
                        <a href="https://www.google.com/search?q=Boldo&rlz=1C1IXYC_ruKZ1008KZ1008&sxsrf=ALiCzsbXogn_ySoE_4IdSKWY0x0nfIrCwA:1660542487373&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiF8t_oksj5AhXhkYsKHe7HBV4Q_AUoAXoECAIQAw&biw=1536&bih=746&dpr=1.25#imgrc=WolQvP0DPf_LyM"
                            className="header_logo">
                            <img src="./public/images/Logo_header_p1.png" className="logo" alt="logo" />
                        </a>
                        <div className="header_burger">
                            <span></span>
                        </div>

                        <nav className="header_menu">
                            <ul className="header_list">
                                <li><a href="#product" className="nav-link">Product</a></li>
                                <li><a href="#services" className="nav-link">Services</a></li>
                                <li><a href="#help" className="nav-link">About</a></li>
                                <li><a href="#help" className="nav-link">{userUserName}</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="userInfo">

                    <div className="title">
                        <h1>Profilie: <i>{userUserName}</i> </h1>
                        <img scr="public\images\Group 305.svg" alt="avatar"></img>
                    </div>

                    <div className="editForm" id="editForm">

                        <div className="labels">
                            <label htmlFor="yourUserName">Username</label>
                            <label htmlFor="yourName">Name</label>
                            <label htmlFor="yourSurname">Surname</label>
                            <label htmlFor="pass">Password</label>
                        </div>
                        <form className="infoForm">
                            <input type="text" id="yourUserName" name="yourUserName" onChange={(event) => setUserUserName(event.target.value)} /><br></br>
                            <input type="text" id="yourName" name="yourName" onChange={(event) => setUserName(event.target.value)} /><br></br>
                            <input type="text" id="yourSurname" name="yourSurname" onChange={(event) => setSurname(event.target.value)} /><br></br>
                            <input className="pass_in" type="password" id="userPass" name="password" onChange={(event) => setUserPassword(event.target.value)} minLength={8} required />
                        </form>
                    </div>

                    <div className="aboutUser" id="aboutUser">
                        <h3>Username: {userUserName} </h3>
                        <h3>Name: {userName}</h3>
                        <h3>Surname: {userSurname} </h3>

                    </div>

                    <div className="saveEdit">
                        <button onClick={saveChanges} className="btn btn-dark">
                            Save
                        </button>
                        <button onClick={showForm} className="btn btn-dark">
                            Edit
                        </button>
                    </div>

                </div>






            </div>
        </div >
    )
}

export default Profile;