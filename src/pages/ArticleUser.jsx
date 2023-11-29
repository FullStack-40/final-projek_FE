import React from "react";
import HeroArticle from "../components/article_user/HeroArticle";
import ArticleLink from "../components/article_user/ArticleLink";
import ArticleList from "../components/article_user/ArticleList";
import Header from "../components/Header";

const ArticleUser = () => {
  return (
    <div>
      <Header />
      <HeroArticle />
      <ArticleLink />
      <ArticleList />
    </div>
  );
};

export default ArticleUser;
