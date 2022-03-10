import * as api from "../api"
import {useState, useEffect, useContext} from "react"
import {UserContext} from "../contexts/UserContext"
import AddComment from "./AddComment"
import DeleteComment from "./DeleteComment"

export default function Comments ({id}) {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {loggedInUser} = useContext(UserContext)

    useEffect(() => {
            api.getComments(id)
            .then(commentData =>{
            setComments(commentData)
            setIsLoading(false)
        })
    }, [id])

    return ( isLoading ? <p>Loading comments...</p> : (
        <div>
            <AddComment comments={comments} setComments={setComments} id={id}/>
            <ul className="article-comments">
                {comments.length === 0 ?  <p>Be the first to comment!</p> : comments.map(comment => {
                return (
                    <li key={comment.comment_id}>
                        <div className="comment-txt">
                            <p>{comment.body}</p>
                            <p>Votes: {comment.votes}</p>
                            <p>By: {comment.author}</p>
                            {loggedInUser.username === comment.author ? <DeleteComment comments={comments} setComments={setComments} commentId={comment.comment_id} /> : ""}
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    ))
}