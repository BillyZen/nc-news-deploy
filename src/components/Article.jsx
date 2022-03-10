import {useParams, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import * as api from "../api"
import Comments from "./Comments"


export default function Article () {
    const {article_id} = useParams()

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0)

    useEffect(() => {
            api.getArticle(article_id)
            .then((articleData) =>{
            setArticle(articleData)
            setIsLoading(false)
        })
    }, [article_id])

    const voteGiven = votes === 1

    return ( isLoading ? <p>Loading your article...</p> : article.article_id ? (
        <main className="article-container">
            <div className="article-header">
                <h3>{article.title}</h3>
                <h4>Author: {article.author}</h4>
                <h4>Topic: {article.topic}</h4>
            </div>
            <div className="article-footer">
                <h5>Votes: {votes + article.votes} 
                <button className={voteGiven ? "hide" : "show"} onClick={()=> {
                    if(!voteGiven) {
                        setVotes(1)
                        api.updateArticleVotes(article_id)
                    }
                }}>
                +</button>
                </h5>
                <h5>Posted: {article.created_at}</h5>
            </div>
            <div className="article-body">
                <p>{article.body}</p>
            </div>
            <div className="article-comments-container">
                <Comments id={article_id}/>
            </div>
        </main>
    ): 
            <main className="error-page">
                <h1>Article does not exist</h1>
                <Link to="/">Back to safety</Link>
            </main>
    )}