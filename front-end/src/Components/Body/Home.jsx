import React,{useState} from 'react'
import NewsFeed from './left-side/NewsFeed'
import Importante from './main-side/Importante'
import Recommended from './right-side/Recommended'
const recentNews=[
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    },
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    },
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    },
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    },
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    },
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    },
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    },
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    },
    {
        time:'16:00',
        title:'Incendiile din Grecia au un impact devastator asupra albinelor. O pădure va avea nevoie de cel puțin 30 de ani ca să-și revină'
    }
]
const popularNews=[
    {
        
    }
]
function Body() {
    const [activeTab, setActiveTab] = useState(0);
    const [news,setNews]=useState(recentNews);

    const onSelectTab=(tab,news)=>{
        setActiveTab(tab);
        setNews(news);
    }
    return (
        <div className="my-4 container">
            <div className="row gx-3 ">
                
                
                <div className="col  col-lg-3 col-xl-2  col-sm-4 order-2">
                    <ul className="nav">
                        <li className="nav-item ">
                            <a className={activeTab==0?"nav-link fs-5 fw-bold text-dark":"nav-link fs-5 fw-bold text-black-50"} 
                                aria-current="page" href="#" 
                                onClick={()=>{onSelectTab(0,recentNews)}}
                            >Noi</a>
                        </li>
                        <li className="nav-item">
                            <a className={activeTab==1?"nav-link fs-5 fw-bold text-dark":"nav-link fs-5 fw-bold text-black-50"} 
                            href="#" 
                            onClick={()=>{onSelectTab(1,popularNews)}}
                            >Populare</a>
                        </li>
                    </ul>
                    <div className="container-fluid p-0  ">
                    <NewsFeed tab={news}></NewsFeed>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-4 order-2">
                <Importante></Importante>
                </div>

                <div className="col col-lg-4 col-sm-4 order-3 " style={{backgroundColor:'#FFFCDF'}}>
                <Recommended ></Recommended>
                </div>
            </div>
        </div>
    )
}

export default Body
