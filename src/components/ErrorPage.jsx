import {Link} from "react-router-dom"

export default function ErrorPage () {
    return (
        <main>
            <h1>PATH DOES NOT EXIST</h1>
            <Link to="/">Back to Safety</Link>
        </main>
    )
}