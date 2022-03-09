import * as api from "../api"
import {useState, useEffect} from "react"

export default function Comments ({id}) {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
            api.getComments(id)
            .then(commentData =>{
            setComments(commentData)
            setIsLoading(false)    
        })
    }, [id])


    return ( isLoading ? <p>Loading comments...</p> : (
        <div>
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