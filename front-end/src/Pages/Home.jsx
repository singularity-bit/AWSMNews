import React,{useState,useEffect} from 'react'
import NewsFeed from '../Components/left-side/NewsFeed'
import NewsFeedTemplate from '../Components/NewsFeedTemplate'

import axios from 'axios'

function Body() {
    const [activeTab, setActiveTab] = useState(0);
    const [latest,setLatest]=useState('');
    const [recommendedNews,setRecommendedNews]=useState('');
    const [breakingNews,setBreakingNews]=useState('')
    const onSelectTab=(tab,news)=>{
        setActiveTab(tab);
        setLatest(news);
    }

    useEffect(()=>{
        axios.get('http://localhost:3001/recommended')
            .then(res=>{
                let data=res.data;
                setRecommendedNews(data)
            }).catch(err=>console.log(err))

        axios.get('http://localhost:3001/breaking')
        .then(res=>{
            let data=res.data;
            setBreakingNews(data);
        }).catch(err=>console.log(err))

        axios.get('http://localhost:3001/latest')
        .then(res=>{
            let data=res.data;
            setLatest(data);
        }).catch(err=>console.log(err))
    },[])
    const Recommended=NewsFeedTemplate;
    const ImportantNews=NewsFeedTemplate;
    return (
        <div className="my-4 container">
            <div className="row gx-3 ">
                
                
                <div className="col  col-lg-3 col-xl-2  col-sm-4 order-2">
                    <ul className="nav">
                        <li className="nav-item ">
                            <a className={activeTab===0?"nav-link fs-5 fw-bold text-dark":"nav-link fs-5 fw-bold text-black-50"} 
                                aria-current="page" href="#" 
                                onClick={()=>{onSelectTab(0,latest)}}
                            >Noi</a>
                        </li>
                        <li className="nav-item">
                            <a className={activeTab===1?"nav-link fs-5 fw-bold text-dark":"nav-link fs-5 fw-bold text-black-50"} 
                            href="#" 
                            onClick={()=>{onSelectTab(1,latest)}}
                            >Populare</a>
                        </li>
                    </ul>
                    <div className="container-fluid p-0  ">
                    {latest.length>0? <NewsFeed tab={latest} type='sidebar'></NewsFeed> : ""}
                    </div>
                </div>
                <div className="col-lg-6 col-sm-4 order-2">
                {breakingNews.length>0? <ImportantNews data={breakingNews} type='main'></ImportantNews> : ""}
                </div>

                <div className="col col-lg-4 col-sm-4 order-3 " style={{backgroundColor:'#FFFCDF'}}>
                {recommendedNews.length>0?<Recommended data={recommendedNews} type='recomended'></Recommended>:"loading..."} 
                </div>
            </div>
        </div>
    )
}

export default Body
