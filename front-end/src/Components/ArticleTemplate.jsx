import React from 'react'
import parse from 'html-react-parser';

function ArticleTemplate({article}) {

    
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col px-4">
                    <div className="container-sm">
                    <h1 className="card-title fs-2 fw-bold pb-4">{article.title}</h1>
                    <img src={article.image} className="img-thumbnail border-0 p-0 rounded-0" alt="..." />
                    <p className="card-text overflow-hidden truncate ">                      
                            {parse(article.content)}
                    </p> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ArticleTemplate
