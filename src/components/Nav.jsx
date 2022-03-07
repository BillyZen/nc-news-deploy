import {Link} from "react-router-dom"
import {useContext} from "react"
import {UserContext} from "../contexts/UserContext"


export default function Nav () {

    const {loggedInUser} = useContext(UserContext)

    return (
        <nav>
            <div className="nav-links-container">
                <Link to="/" className="nav-link">All</Link>
                <Link to="/coding" className="nav-link">Coding</Link>
                <Link to="/football" className="nav-link">Football</Link>
                <Link to="/cooking" className="nav-link">Cooking</Link>
            </div>
            <span>
                {loggedInUser.username}
                <img className="nav-img-avatar" src={loggedInUser.avatar_url} alt="logged in user" />
            </span>
        </nav>
    )
}