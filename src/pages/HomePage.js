import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id:0,
        author: "Anna Kowalska",
        title: "Pierwsze co musisz wiedzieć!",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quisquam deleniti, recusandae velit, error officia soluta reiciendis doloribus sapiente blanditiis, assumenda eum dolores excepturi. Itaque blanditiis corporis atque at illo!"
    },
    {
        id:1,
        author: "Przemysław Kolano",
        title: "Dlaczego zakochałem się w górach?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quisquam deleniti, recusandae velit, error officia soluta reiciendis doloribus sapiente blanditiis, assumenda eum dolores excepturi. Itaque blanditiis corporis atque at illo!"
    },
    {
        id:2,
        author: "Olga Figa",
        title: "Czego nauczyły mnie góry?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quisquam deleniti, recusandae velit, error officia soluta reiciendis doloribus sapiente blanditiis, assumenda eum dolores excepturi. Itaque blanditiis corporis atque at illo!"
    }
]

const HomePage = () => {

    const text = articles.map(article => (
        <Article 
         key={article.id}
         author={article.author}
         title={article.title}
         content={article.content}
         />
    ))
    
    return ( 
        <>
        <h1>Dzień dobry!</h1>
        <p className="intro">Tutaj znajdziesz wszystkie potrzebne informacje przed pierwszym wyjściem w góry</p>
        {text}
        </>
     );
}
 
export default HomePage;