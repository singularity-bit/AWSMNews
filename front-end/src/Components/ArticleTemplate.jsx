import React,{useState} from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import WithNewsCard from '../HOC/withNewsCard'
import StandardCard from './Cards/StandardCard';
function ArticleTemplate({type,article}) {

     //wrapping newscard with HOC
    const Card=WithNewsCard(StandardCard)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card type={type} article={article}/>
                </div>
            </div>
        </div>
    )
}

export default ArticleTemplate
