import React from 'react'
import  './newsfeed.css'
function NewsFeed({tab}) {

    const newsList=()=>{
        return tab.map((item,index)=>{
            return (
                <div className="w-100 mb-4 " key={index}>
                    <small className="text-muted fw-bold">{item.time}</small>
                    <h5 className="mb-1 fw-bold">{item.title}</h5>
                </div>
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
