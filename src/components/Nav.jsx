import {Link} from "react-router-dom"
import {useContext} from "react"
import {UserContext} from "../contexts/UserContext"


export default function Nav () {

    const {loggedInUser} = useContext(UserContext)

    return (
        <nav>
            <Link to="/">All</Link>
            <Link to="/coding">Coding</Link>
            <Link to="/football">Football</Link>
            <Link to="/cooking">Cooking</Link>
            <span>
                {loggedInUser.username}
                <img className="nav-img-avatar" src={loggedInUser.avatar_url} alt="logged in user" />
            </span>
        </nav>
    )
}