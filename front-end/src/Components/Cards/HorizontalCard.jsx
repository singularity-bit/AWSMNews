import React,{useEffect} from 'react'
import parse from 'html-react-parser';


function HorizontalCard({article}) {

    return (
            <div className="card border-0 px-0 bg-transparent rounded-0">
            <div className="row g-0">
            <div className="col-md-4">
                <img src={article.image} className="img-fluid" alt="..."/>
            </div>
            <div className="col-md-8 ">
            <div className="card-body py-2 py-lg-0 px-0 px-lg-3">
                <h6 className="card-title fw-bold">{article.title}</h6>
                <p className="card-text">{parse(article?.content)}</p>
                <p className="fw-bold text-danger my-2">
                    {article?.tag}
                    <span className={article.tag?"fw-bold text-muted my-2 mx-4":"fw-bold text-muted my-2"}>
                    {article?.createdAt}
                    </span>
                </p>
            </div>
            </div>
            </div>
            </div>
    )
}

export default HorizontalCard
