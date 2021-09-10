import React,{useState,useEffect} from 'react'
import MainNews from '../Components/FeedTemplate/MainNews';
import axios from 'axios';
import SidebarFeed from '../Components/FeedTemplate/SidebarFeed';
import CategoryNews from '../Components/FeedTemplate/CategoryNews';
function WithNewsFeed(Component,requestUrl){
    return function WithNewsFeedComponent({...props}){

        const [news,setNews]=useState([])
        const [isLoading,setIsLoading]=useState(true)
        const [isError,setIsError]=useState('')

        let items={...props}
        const type=items.style
       
        useEffect(()=>{
            requestUrl && axios.get(requestUrl)
                .then(res=>{
                    setNews(res.data)
                    setIsLoading(false)
                }).catch(err=>setIsError(err))
        },[])

        switch(type){
            case 'main' : return <MainNews data= {news} isLoading={isLoading} {...props}/>

            case 'sidebar' : return <SidebarFeed  data= {news} isLoading={isLoading} {...props}/>

            case  'recommended' : return <Component   data= {news} isLoading={isLoading} {...props}/>

            default : return <CategoryNews   data= {news} isLoading={isLoading} {...props}/>
        }
    };
}
export default WithNewsFeed;
