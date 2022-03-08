import Header from "./components/Header"
import Nav from "./components/Nav"
import Feed from "./components/Feed"
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Article from "./components/Article";


function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    username: 'tickle122',
    name: 'Tom Tickle',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
  });



  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/:topic" element={<Feed />} />
            <Route path="/articles/:article_id" element={<Article />} />
          </Routes>
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
