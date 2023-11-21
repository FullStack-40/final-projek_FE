import React from 'react'
import NavbarArticle from '../components/article_user/NavbarArticle'
import HeroArticle from '../components/article_user/HeroArticle'
import ArticleLink from '../components/article_user/ArticleLink'
import ArticleList from '../components/article_user/ArticleList'
import ArticleDetails from '../components/article_user/ArticleDetails'

const ArticleUser = () => {
  return (
    <div>
      <NavbarArticle />
      <HeroArticle />
      <ArticleLink />
      <ArticleList />
    </div>
  )
}

export default ArticleUser