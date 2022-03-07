import {useEffect, useState} from "react"
import * as api from "../api"

export default function Feed () {

    const [articles, setArticles] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.getArticles()
        .then(articlesData =>{
            setArticles(articlesData)
            setIsLoading(false)
        })
    }, [])

    return (
         isLoading ? <p>Loading...</p> : (
        <section className="section-feed">
            <h3>Your feed</h3>
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
        </section>
    ))
}