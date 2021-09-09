import React from 'react'
import { useHistory,useParams } from "react-router-dom";
import parse from 'html-react-parser';

function StandardCard({type,article}) {

    const history = useHistory();
    const routeChange = (path) =>{ 
        console.log("route path",path)
    history.push(`news/${path}`);
    }
    return (
        <div className="card border-0 px-0 bg-transparent rounded-0" > 
            <div className="card-body px-0">
                {
                    type==='highlight' &&
                    <h1 className="card-title fw-bold">{article?.title}</h1>
                }
                {type!=='sidebar' && <img src={article?.image} className="img-thumbnail border-0 p-0 rounded-0" alt="..." onClick={()=>routeChange(article.title)}/>}
                <p className="fw-bold text-danger my-2">
                    {article?.tag}
                    <span className={article?.tag?"fw-bold text-muted my-2 mx-4":"fw-bold text-muted my-2"}>
                    {article.createdAt}
                    </span>
                </p>
                {
                    type==='recomended' &&
                    <h5 className="card-title fw-bold" onClick={()=>routeChange(article.title)}>{article?.title}</h5>
                }
                {
                    type==='sidebar' &&
                    <h6 className="card-title fw-bold">{article?.title}</h6>   
                }
                {
                    article.content &&
                    <p className="card-text overflow-hidden truncate ">{parse(article?.content)}</p>                          
                }
            </div>
        </div>
    )
}

export default StandardCard
