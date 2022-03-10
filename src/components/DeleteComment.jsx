import * as api from "../api"
import {useState} from "react"

export default function DeleteComment ({comments, setComments, commentId}) {

    const [deleting, setDeleting] = useState(false)

    return (
        <button
        className="delete-button"
        onClick={()=> {
            setDeleting(true)
            api.deleteComment(commentId).then(res => {
                console.log(res)
                setDeleting(false)
                setComments(comments.filter(comment => comment.comment_id !== commentId))
            })
        }}
        >{deleting ? "Deleting..." : "DELETE"}</button>
    )
}