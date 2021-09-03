import React,{useState} from 'react'
import WithNewsCard from '../HOC/withNewsCard'
import './NewsCard.css'
import { useHistory,useParams } from "react-router-dom";

function NewsCard({type,article}) {
    const { id } = useParams();
    const history = useHistory();
    const routeChange = (path) =>{ 
        console.log("route path",path)
    history.push(`news/${path}`);
    }
    const standardCard=(type,article)=>{
        return (
        <div className="card border-0 px-0 bg-transparent rounded-0" > 
            <div className="card-body px-0">
                {
                    type==='highlight' &&
                    <h1 className="card-title fw-bold">{article?.title}</h1>
                }
                {article?.image &&<img src={article?.image} className="img-thumbnail border-0 p-0 rounded-0" alt="..." onClick={()=>routeChange(article.title)}/>}
                <p className="fw-bold text-danger my-2">
                    {article?.tag}
                    <span className={article?.tag?"fw-bold text-muted my-2 mx-4":"fw-bold text-muted my-2"}>
                    {article?.time}
                    </span>
                </p>
                {
                    type==='recomended' &&
                    <h5 className="card-title fw-bold">{article.title}</h5>
                }
                {
                    type==='sidebar' &&
                    <h6 className="card-title fw-bold">{article.title}</h6>   
                }
                {
                    article.content &&
                    <p className="card-text overflow-hidden truncate ">{article.content}</p>                          
                }
            </div>
        </div>
        )
        
    }
    const horizontalCard=(article)=>{
        return (
            <div className="card border-0 px-0 bg-transparent rounded-0">
            <div className="row g-0">
            <div className="col-md-4">
                <img src={article.image} className="img-fluid" alt="..."/>
            </div>
            <div className="col-md-8 ">
            <div className="card-body py-2 py-lg-0 px-0 px-lg-3">
                <h6 className="card-title fw-bold">{article.title}</h6>
                <p className="card-text">{article.content}</p>
                <p className="fw-bold text-danger my-2">
                    {article?.tag}
                    <span className={article.tag?"fw-bold text-muted my-2 mx-4":"fw-bold text-muted my-2"}>
                    {article?.time}
                    </span>
                </p>
            </div>
            </div>
            </div>
        </div>
        )
    }

    if(type==='news'){
        return horizontalCard(article);
    }else{
        return standardCard(type,article)
    }
}

export default WithNewsCard(NewsCard)
