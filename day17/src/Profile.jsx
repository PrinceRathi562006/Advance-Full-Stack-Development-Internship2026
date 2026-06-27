import {useContext} from "react"
import UserContext from "./UserContext.jsx"

const Profile = () => {
    const user = useContext(UserContext);
  return (
    <div>Profile name is {user}</div>
  )
}

export default Profile