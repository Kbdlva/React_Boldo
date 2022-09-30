import { useContext } from "react";
import { UserContext } from "../App";
import './Profile.css'

const Profile = (props) => {
    const {user} = useContext(UserContext);
    return (
        <>
        <div className="Prof">
            <div className="wrapper">
            {user.username}
            {user.name}
            </div>
            Profile</div>
            
            </>
    )
}

export default Profile;