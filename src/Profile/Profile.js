import { useContext } from "react";
import { UserContext } from "../App";

// use react context
const Profile = (props) => {
    const userContext = useContext(UserContext);
    console.log(userContext);
    return (
        <>
            <div>Profile</div>
            {userContext.username}
        </>
    )
}

export default Profile;