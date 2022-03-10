import {useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import * as api from "../api"
import SortFeed from "./SortFeed"

export default function Feed () {

    const {topic} = useParams()

    const [articles, setArticles] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    const [sort, setSort] = useState("created_at")
    const [order, setOrder] = useState('DESC')


    useEffect(() => {
        setIsLoading(true)
        if(topic) {
            api.getTopicArticles(topic, sort, order)
            .then(articlesData =>{
            setArticles(articlesData)
            setIsLoading(false)
        })
        } else {
            api.getArticles(sort, order)
            .then(articlesData =>{
            setArticles(articlesData)
            setIsLoading(false)
        })}
    }, [topic, sort, order])

    return (
         isLoading ? <p>Loading your feed...</p> : (
        <main className="section-feed">
            <h3>Your {topic} feed</h3>
            <SortFeed setSort={setSort} setOrder={setOrder}/>
            <ul>
            {articles.map(article => {
                return (
                    <li key={article.title}>
                        <Link className="article-link" to={`/articles/${article.article_id}`}>
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