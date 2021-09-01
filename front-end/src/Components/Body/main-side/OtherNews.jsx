import React from 'react'


function OtherNews({article}) {    
    return (
                    <div className="card border-0 p-0 bg-transparent rounded-0" > 
                        <div className="card-body px-0">
                            
                            <img src={article.image} className="img-thumbnail border-0 p-0 rounded-0 "  alt="..."/>
                            <p className="fw-bold text-danger my-2">{article.tag}</p>
                            <h5 className="card-title fw-bold">{article.title}</h5>
                            
                            <p className="card-text">{article.content}</p>
                            
                        </div>
                    </div>  
    )
}

export default OtherNews
