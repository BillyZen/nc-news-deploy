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