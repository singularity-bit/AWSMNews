import React from 'react'
import WithNewsFeed from '../HOC/withNewsFeed'
import NewsCard from './NewsCard'
import { v4 as uuidv4 } from 'uuid';
function NewsFeedTemplate({type,data}) {
    let columns=[];

    //generates an row after each 3 column
    const generateColumn=(style,news)=>{
        news.forEach((item,index)=>{
            columns.push(
                <div className="col py-3" key={index}>
                    <NewsCard article={item} type={style}></NewsCard>
                </div>
            )
            if(index % 3 ===0 ){
                columns.push(
                    <div className="row" key={uuidv4()}> </div>
                )     
            }
        })
    }
    const newsType=(style,news)=>{
        
        if(style==='main'){
            return (
                <div className="container bg-transparent">
                    <div className="row">
                        <div className="col">
                            <NewsCard article={news[0]} type='highlight'></NewsCard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col border-end">
                            <NewsCard article={news[1]} type={type}></NewsCard>
                        </div>
                        <div className="col">
                            <NewsCard article={news[2]} type={type}></NewsCard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col border-end">
                            <NewsCard article={news[3]} type={type}></NewsCard>
                        </div>
                        <div className="col">
                            <NewsCard article={news[4]} type={type}></NewsCard>
                        </div>
                    </div>
                </div>
                
            )
        }else if(style==='recomended'){
            return (
                <div className="container bg-transparent">
                    <div className="row">
                        <div className="col">
                            <NewsCard article={news[0]} type={style}></NewsCard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                                <NewsCard article={news[1]} type={style}></NewsCard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <NewsCard article={news[2]} type={style}></NewsCard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <NewsCard article={news[3]} type={style}></NewsCard>
                        </div>
                    </div>
                </div>
            )
        }else{
            generateColumn(style,news);
            return (
                <div className="container bg-transparent">
                <div className="row">
                {columns}
                </div>
                </div>
            )
            
        }

    }
    return (
        <div className={type==='main'?"border-end border-start":""}>
            <div className="nav-link">
                <h5 className="m-0 p-0 fw-bold text-black-50">
                    {type==='main'?'IMPORTANT':'RECOMMENDED'}
                </h5>
            </div>
            {newsType(type,data)}
        </div>
    )
}

export default WithNewsFeed(NewsFeedTemplate)
