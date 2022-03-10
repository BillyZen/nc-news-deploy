import {Link} from "react-router-dom"

export default function ErrorPage () {
    return (
        <main className="error-page">
            <h1>404: PATH DOES NOT EXIST</h1>
            <Link to="/">Back to Safety</Link>
        </main>
    )
}