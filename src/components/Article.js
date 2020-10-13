import React from 'react'

const Article = (props) => {
    return ( 
        <article>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.content}</p>
        </article>
     );
}
 
export default Article;