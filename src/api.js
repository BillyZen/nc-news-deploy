import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://will-news-app-nc.herokuapp.com/api",
});

// Feed - get all articles
export function getArticles(sort, order) {
  return newsApi.get("/articles", {
        params: {
        sort_by: sort,
        order: order
        }
    }).then(({ data: { articles } }) => {
    return articles;
  });
}

// Feed - get all topic articles
export function getTopicArticles(topic, sort, order) {
  return newsApi.get("/articles", {
     params: {
      topic: topic,
      sort_by: sort,
      order: order
    }
  }).then(({ data: { articles } }) => {
    return articles;
  });
}

// Article - get article by id
export function getArticle(id) {
  return newsApi.get(`/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
}

// Article - update Votes
export function updateArticleVotes(id) {
  return newsApi.patch(`/articles/${id}`, {inc_votes : 1})
}

// Comments - show comments
export function getComments(id) {
  return newsApi.get(`/articles/${id}/comments`).then(({ data: { comments } }) => {
    return comments;
  });
}

// Comments - add a comment
export function addComment(id, userName, commentBody) {
  return newsApi.post(`/articles/${id}/comments`, { 
                    username : userName,
                    body : commentBody
    }).then(({data: {comment}}) => {
    return comment;
  });
}

// Comments - delete a comment
export function deleteComment(commentId){
    return newsApi.delete(`/comments/${commentId}`)
    .then(()=>{
        return "Deleted Comment"
    })
}