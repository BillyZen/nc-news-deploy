

export default function SortFeed ({setSort, setOrder}) {

    return (
    <div>
        <h2>Sort By</h2>
        <button
        onClick={()=>{
            setSort("created_at")
        }}
        >Date</button>
        <button
        onClick={()=>{
            setSort("title")
        }}
        >Title</button>
        <button
        onClick={()=>{
            setSort("comment_count")
        }}
        >Comment Count</button>
        <button
        onClick={()=>{
            setSort("votes")
        }}
        >Votes</button>
        <button
        onClick={()=>{
            setSort("author")
        }}
        >Author</button>
        <h2>Order</h2>
        <button
        onClick={()=>{
            setOrder("asc")
        }}
        >ASC</button>
        <button
        onClick={()=>{
            setOrder("DESC")
        }}
        >DESC</button>
    </div>
    )
}