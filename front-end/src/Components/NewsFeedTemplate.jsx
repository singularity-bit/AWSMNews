import React from 'react'
import WithNewsFeed from '../HOC/withNewsFeed'

import NewsCard from './NewsCard'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
function NewsFeedTemplate({type,data}) {
    
    

    //generates an row after each 3 column
    const generateColumn=(style,news)=>{
        return news.map(item=>{
            return (
                <div className="row py-4" key={uuidv4()}>
                    <NewsCard article={item} type={style}></NewsCard>
                </div>
            )
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
            
            return (
                <div className="container bg-transparent">
                    {generateColumn(style,news)}
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
