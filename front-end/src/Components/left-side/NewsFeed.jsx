import React from 'react'
import  './newsfeed.css'
import NewsCard from '../NewsCard'
function NewsFeed({tab,type}) {

    const newsList=()=>{
        return tab.map((item,index)=>{
            return (
                <NewsCard type={type} article={item} key={index}/>
            )
        })
    }
    return (
        <div className="scrolling-area ">
            <div className="px-2 list-group overflow-auto text-start" id="style-4">
                {newsList()}
            </div>
        </div>
    )
}

export default NewsFeed
