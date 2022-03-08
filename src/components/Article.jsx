export default function Article () {
    return (
        <main className="article-container">
            <div className="article-header">
                <h3>Article Title</h3>
                <h4>Article Author</h4>
                <h4>Article Topic</h4>
            </div>
            <div className="article-body">
                <p>Article Body</p>
            </div>
            <div className="article-footer">
                <h5>Article Votes</h5>
                <h5>Created At...</h5>
            </div>
        </main>
    )
}