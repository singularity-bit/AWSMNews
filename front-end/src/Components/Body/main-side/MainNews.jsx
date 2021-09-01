import React,{useState} from 'react'


function MainNews({article}) {
    const [news,setNews]=useState(article);

    return (
        <div className="card border-0 px-0 bg-transparent rounded-0" > 
            <div className="card-body px-0">
                <h1 className="card-title fw-bold">{article.title}</h1>
                <img src={article.image} className="img-thumbnail border-0 p-0 rounded-0" alt="..."/>
                <p className="fw-bold text-danger my-2">{article.tag}</p>
                <p className="card-text">{article.content}</p>                          
            </div>
        </div>
    )
}

export default MainNews
