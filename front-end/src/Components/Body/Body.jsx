import React,{useState} from 'react'
import NewsFeed from './left-side/NewsFeed'

const data=[
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
function Body() {
    const [activeTab, setActiveTab] = useState(0);
    const [news,setNews]=useState(data);

    return (
        <div class="my-4 container">
            <div class="row gx-3 ">
                <div class="col col-lg-3 col-xl-2 ">
                <ul className="nav">
                    <li className="nav-item ">
                        <a className={activeTab==0?"nav-link fs-5 fw-bold text-dark":"nav-link fs-5 fw-bold text-black-50"} 
                            aria-current="page" href="#" 
                            onClick={()=>{setActiveTab(0)}}
                        >Noi</a>
                    </li>
                    <li className="nav-item">
                        <a className={activeTab==1?"nav-link fs-5 fw-bold text-dark":"nav-link fs-5 fw-bold text-black-50"} 
                        href="#" 
                        onClick={()=>{setActiveTab(1)}}
                        >Populare</a>
                    </li>
                </ul>
                <div className="container-fluid p-0">
                <NewsFeed tab={news}></NewsFeed>
                </div>
                
                </div>
                <div class="col  bg-primary">
                Second in DOM, unordered
                </div>
                <div class="col col-lg-4 bg-info">
                Third in DOM, ordered first
                </div>
            </div>
        </div>
    )
}

export default Body
