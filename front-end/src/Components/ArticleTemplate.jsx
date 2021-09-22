import React from 'react'
import parse from 'html-react-parser';

function ArticleTemplate({article}) {
    //formating options
    const options={day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'}

    //copy article obj
    let items={...article}
    
    //formating time
    const date=new Date(items.createdAt);
    const time=date.toLocaleTimeString('en-GB',options) 
 
    
    return (
        <div className="container px-5 py-3">
            <div className="row">
                <div className="col px-4">
                    <div className="container-sm">
                    <h5 className="fw-bold text-danger my-2">{article.tag}</h5>
                    <h1 className="card-title fs-2 fw-bold pb-4">{article.title}</h1>
                    <img src={article.image} className="img-thumbnail border-0 p-0 rounded-0" alt="..." />
                    
                    <div className={" my-3 d-flex justify-content-between"}>
                        {article.authors && <p className="fw-bold text-muted" >Publicat de {article.authors}</p>}
                        <p className="fw-normal text-black-50">{time}</p>                    
                    </div>
                    
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
