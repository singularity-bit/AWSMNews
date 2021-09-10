import React,{useState} from 'react'

import WithNewsCard from '../HOC/withNewsCard'
import StandardCard from './Cards/StandardCard';
import parse from 'html-react-parser';

function ArticleTemplate({article}) {

    //trebuiie de facut fetch dupa id-ul din url
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="card-title fw-bold">{article.title}</h1>
                    <img src={article?.image} className="img-thumbnail border-0 p-0 rounded-0" alt="..." />
                    <p className="card-text overflow-hidden truncate ">                      
                            {parse(article.content)}
                        </p> 
                </div>
            </div>
        </div>
    )
}

export default ArticleTemplate
