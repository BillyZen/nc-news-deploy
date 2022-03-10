import {useEffect, useState} from "react"
import * as api from "../api"

export default function FeedCoding () {
   const [articles, setArticles] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.getTopicArticles("coding")
        .then(articlesData =>{
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [])

    return (
         isLoading ? <p>Loading your feed...</p> : (
        <main className="section-feed">
            <h3>Your coding feed</h3>
            <ul>
            {articles.map(article => {
                return (
                    <li key={article.title}>
                        <div className="article-txt">
                            <h4>{article.title}</h4>
                            <p>Author - {article.author}</p>
                            <p>Topic - {article.topic}</p>
                            <p>Votes - {article.votes}</p>
                        </div>
                    </li>
                )
            })}
            </ul>
        </main>
    ))
}