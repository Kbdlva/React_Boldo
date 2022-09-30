import { useContext } from "react";
import { UserContext } from "../App";
import './Profile.css'
import { Link } from 'react-router-dom';


const Profile = (props) => {
    const {user} = useContext(UserContext);
    console.log(user.username);
    return (

        
        <div className="Prof">
            
            <div className="circle">

            </div>


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


                                <button className="btn btn-basic nav-link"  >
                                    Log in
                                </button>

                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="wrapper">

                <div className="userInfo">

                    <div className="title">
                        <h1>Profilie: <i>{user.username}</i> </h1>
                        <img scr="public\images\Group 305.svg"></img>
                    </div>


                    <div className="aboutUser">
                        <h3>Username: {user.username} </h3>
                        <h3>Name: {user.username} </h3>
                        <h3>Surname: {user.name} </h3>

                    </div>

                    <div className="saveEdit">
                        <button className="btn btn-dark">
                            Save
                        </button>
                        <button className="btn btn-dark">
                            Edit
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile;