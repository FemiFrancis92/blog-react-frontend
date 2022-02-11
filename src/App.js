import React, { useState, useEffect } from "react";
import './App.css';
import Home from './components/home/Home';
import AuthService from "./services/auth.service";
import About from './components/about/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import Error from './components/error/Error';
import Header from './components/header/Header';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from "./components/Profile";
import BoardUser from "./components/BloardUser";
import BoardAdmin from "./components/BoardAdmin";

function App() {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  const logOut = () => {
    AuthService.logout();
  };

  return (
  <Router>
    <>
      <Header />
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/signup" element = {<Signup />} />
      <Route path = "/login" element = {<Login />} />

      {/* <Route path = "/about" element = {<About />} /> */}
      <Route path = "/article-list" element = {<ArticleList />} />
      <Route path="/user" component={BoardUser} />
      <Route path="/admin" component={BoardAdmin} />
      <Route path = "/article/:name" element = {<Article />} />
      <Route path="*" element = {<Error />} />
    </Routes>

    </>
  </Router>
  );
}

export default App;
