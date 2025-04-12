import React from 'react'
import Article from './Article'

const ArticleList = ({posts}) => {
  return (
    <main>
     {posts.map((posts) => (
        <Article key={posts.id} {...posts}/>
     ))}  
    </main>
  )
}

export default ArticleList
