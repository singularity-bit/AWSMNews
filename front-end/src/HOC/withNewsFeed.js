import React from 'react'
import MainNews from '../Components/FeedTemplate/MainNews';
import RecommendedNews from '../Components/FeedTemplate/RecommendedNews'
import SidebarFeed from '../Components/FeedTemplate/SidebarFeed';
import CategoryNews from '../Components/FeedTemplate/CategoryNews';
function WithNewsFeed(Component){
    return function WithNewsFeedComponent({...data}){

        let items={...data}
        const type=items.style
        if(type==='main'){
            return <MainNews  {...data}/>
        }else if (type==='sidebar'){
            return <SidebarFeed  {...data}/>
        }else if (type==='recommended') return <RecommendedNews  {...data}/>
        else  return <CategoryNews  {...data}/>
    };
}
export default WithNewsFeed;
