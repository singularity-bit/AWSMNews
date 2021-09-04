import React,{useState} from 'react'
import NewsCard from './NewsCard'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function ArticleTemplate({type,article}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <NewsCard type={type} article={article}/>
                    <div >
                        {article.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleTemplate