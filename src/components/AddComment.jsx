import {useState, useContext} from "react"
import {UserContext} from "../contexts/UserContext"
import * as api from "../api"

export default function AddComment ({comments, setComments, id}) {

    const {loggedInUser} = useContext(UserContext)
    const {username} = loggedInUser
    const [posting, setPosting] = useState(false)
    const [commentToAdd, setCommentToAdd] = useState("")

    return (
        <form className="comment-post-container"
                onSubmit={
                (e) => {
                    e.preventDefault()
                    if(commentToAdd !== "") {setPosting(true)
                    api.addComment(id, username, commentToAdd).then((postedComment)=> {
                        setComments([postedComment, ...comments])
                        setPosting(false)
                        setCommentToAdd("")
                        
                    })
                }
                }
            }
            >
                <input
            value={commentToAdd}
            onChange={
                (e) => {
                    setCommentToAdd(e.target.value)
                }
            }
            placeholder="Enter your comment here..."
            ></input>
            <button
            type="submit"
            >{posting ? "Posting Comment" : "Add Comment"}</button>
            </form>
    )
}