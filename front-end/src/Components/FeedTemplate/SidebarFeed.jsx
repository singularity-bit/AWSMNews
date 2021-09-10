import React,{useEffect} from 'react'
import  '../left-side/newsfeed.css'
import StandardCard from '../Cards/StandardCard';
import WithNewsCard from '../../HOC/withNewsCard'


function SidebarFeed({data,style,isLoading}) {

    const Card=WithNewsCard(StandardCard)

    useEffect(()=>{
        console.log("sidebar is loading",isLoading);
    },[])
    const newsList=()=>{
        return data.map((item,index)=>{
            return (
                <Card type={style} article={item} key={index}/>
            )
        })
    }
    return (
        !isLoading?
        <div className="scrolling-area ">
            <div className="px-2 list-group overflow-auto text-start" id="style-4">
                {newsList()}
            </div>
        </div> :
        <p>data is fetching...</p>
    )
}

export default SidebarFeed
