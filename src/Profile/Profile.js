import { useContext } from "react";
import { UserContext } from "../App";
import './Profile.css'

const Profile = (props) => {
    const cont = useContext(UserContext);
    console.log(UserContext.username);
    return (
        <>
        <div className="Prof">
            <div className="wrapper">
            {UserContext.username}
            </div>
            Profile</div>
            
            </>
    )
}

export default Profile;