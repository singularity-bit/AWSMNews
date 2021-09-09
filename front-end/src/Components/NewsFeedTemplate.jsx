import React,{useEffect} from 'react'
import WithNewsFeed from '../HOC/withNewsFeed'
import StandardCard from './Cards/StandardCard';
import { Link } from 'react-router-dom';
import WithNewsCard from '../HOC/withNewsCard'
import RecommendedNews from './FeedTemplate/RecommendedNews';

const News=WithNewsFeed(RecommendedNews)
function NewsFeedTemplate({type,data}) {

    return (
        <div className={type==='main'?"border-end border-start":""}>
            <div className="nav-link">
                <h5 className="m-0 p-0 fw-bold text-black-50">
                    {type!=='sidebar'&& data[0].type}
                </h5>
            </div>
            <News style={type} data={data}/>
        </div>
    )
}

export default NewsFeedTemplate
