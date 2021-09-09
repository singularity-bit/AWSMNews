import React from 'react'
import  '../left-side/newsfeed.css'
import StandardCard from '../Cards/StandardCard';
import WithNewsCard from '../../HOC/withNewsCard'


function SidebarFeed({data,style}) {

    const Card=WithNewsCard(StandardCard)

    const newsList=()=>{
        return data.map((item,index)=>{
            return (
                <Card type={style} article={item} key={index}/>
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

export default SidebarFeed
