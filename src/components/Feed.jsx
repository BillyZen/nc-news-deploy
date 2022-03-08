import {useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import * as api from "../api"

export default function Feed () {

    const {topic} = useParams()

    const [articles, setArticles] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setIsLoading(true)
        if(topic) {
            api.getTopicArticles(topic)
            .then(articlesData =>{
            setArticles(articlesData)
            setIsLoading(false)
        })
        } else {
            api.getArticles()
            .then(articlesData =>{
            setArticles(articlesData)
            setIsLoading(false)
        })}
    }, [topic])

    return (
         isLoading ? <p>Loading your feed...</p> : (
        <main className="section-feed">
            <h3>Your {topic} feed</h3>
            <ul>
            {articles.map(article => {
                return (
                    <li key={article.title}>
                        <Link to={`/articles/${article.article_id}`}>
                            <div className="article-txt">
                                <h4>{article.title}</h4>
                                <p>Author - {article.author}</p>
                                <p>Topic - {article.topic}</p>
                                <p>Votes - {article.votes}</p>
                            </div>
                        </Link>
                    </li>
                )
            })}
            </ul>
        </main>
    ))
}