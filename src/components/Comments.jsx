import * as api from "../api"
import {useState, useEffect, useContext} from "react"
import {UserContext} from "../contexts/UserContext"

export default function Comments ({id}) {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {loggedInUser} = useContext(UserContext)
    const {username} = loggedInUser
    const [commentToAdd, setCommentToAdd] = useState()
    const [postedComment, setPostedComment] = useState(false)
    const [posting, setPosting] = useState(false)
    

    useEffect(() => {
            api.getComments(id)
            .then(commentData =>{
            setComments(commentData)
            setIsLoading(false)    
            setPostedComment(false)
        })
    }, [postedComment, id])

    return ( isLoading ? <p>Loading comments...</p> : (
        <div>
            <div className="comment-post-container">
                <input
                value={commentToAdd}
                onChange={
                    (e) => {
                        setCommentToAdd(e.target.value)
                    }
                }
                ></input>
                <button
                onClick={
                    async () => {
                        setPosting(true)
                        await api.addComment(id, username, commentToAdd)
                        setPostedComment(true)
                        setCommentToAdd("")
                        setPosting(false)
                    }
                }
                >{posting ? "Posting Comment" : "Add Comment"}</button>
            </div>
            
            <ul className="article-comments">
                {comments.length === 0 ?  <p>Be the first to comment!</p> : comments.map(comment => {
                return (
                    <li key={comment.comment_id}>
                        <div className="comment-txt">
                            <p>{comment.body}</p>
                            <p>Votes: {comment.votes}</p>
                            <p>By: {comment.author}</p>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    ))
}