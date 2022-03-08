import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://will-news-app-nc.herokuapp.com/api",
});

// Feed - get all articles
export function getArticles() {
  return newsApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
}

// Feed - get all topic articles
export function getTopicArticles(topic) {
  return newsApi.get("/articles", {
     params: {
      topic: topic
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