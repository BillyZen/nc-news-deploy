import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import * as api from "../api"


export default function Article () {
    const {article_id} = useParams()

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            api.getArticle(article_id)
            .then(articleData =>{
            setArticle(articleData)
            setIsLoading(false)    
        }, [])
    })

    return ( isLoading ? <p>Loading your article...</p> : (
        <main className="article-container">
            <div className="article-header">
                <h3>{article.title}</h3>
                <h4>Author: {article.author}</h4>
                <h4>Topic: {article.topic}</h4>
            </div>
            <div className="article-footer">
                <h5>Votes: {article.votes}</h5>
                <h5>Posted: {article.created_at}</h5>
            </div>
            <div className="article-body">
                <p>{article.body}</p>
            </div>
        </main>
    ))
}