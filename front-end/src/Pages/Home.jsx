import React,{useState} from 'react'
import NewsFeed from '../Components/Body/left-side/NewsFeed'
import NewsFeedTemplate from '../Components/NewsFeedTemplate'
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
const RecommendedNews=[
    {
        title:"A deschis o școală de limba română la Sankt Petersburg: „După prima mea vizită la București, eram îndrăgostită total”",
        time:'16:00',
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2020/12/789-Litta-3-1920x1020-c-default.jpg",
        content:"Litta Spirina s-a născut la Chișinău, într-o familie de etnici ruși și a rămas să locuiască aici, cu unele pauze, timp de 8 ani. Ulterior, a plecat în Rusia, stabilindu-se cu traiul la Sankt Petersburg, iar dup…"
    },
    {
        title:"Afganistanul moldovenesc",
        time:'16:00',
        tag:"EDITORIALE",
        image:"https://www.zdg.md/wp-content/uploads/2020/09/775-EDITORIAL-ALINA-RADU-RO-1920x1020-c-default.jpg",
        content:"Despre sicriele de zinc am auzit prima dată în satul meu, în anii ‘80. Eram copil și credeam că toate sicriele sunt groaznice, pentru că așa le e menirea, să ducă morții prin sat, dar iată că apăruseră sicrie ș…"
    },
    {
        title:"FOTO/ Cum arată casa noului șef interimar al IGP, pe care susține că a cumpărat-o cu 45 de mii de euro",
        time:'16:00',
        tag:"ANCHETA",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/Casa-lui-Lilian-Carabet-1-1920x1020-c-default.jpg",
        content:"Lilian Carabeț, noul șef interimar al Inspectoratului General al Poliției, locuiește într-o casă de milioane, amplasată într-o zonă selectă din Dumbrava, o suburbie a Chișinăului. Familia Carabeț a cumpărat bun…"
    },
    {
        title:"Mormântul mamei din cimitirul de la Ciuciulea, mi-a implantat rădăcini în Moldova și m-a „readus” acasă",
        time:'16:00',
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/820-maria-vizdoaga2-1920x1020-c-default.jpg",
        content:"Interviu cu Maria Vîzdoagă, Biroul Vizdoaga Law Office, New York…"
    }
]
const BREAKING=[
    {
        title:"FOTO/ Peste 6 600 de doze de vaccin împotriva COVID-19, administrate în ultimele 24 de ore",
        time:'16:00',
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/vaccinare-1-1920x1020-c-default.jpg",
        content:"În ultimele 24 de ore au fost administrate 6 685 de doze de vaccin împotriva COVID-19, anunță Ministerul Sănătății, Muncii și Protecției Sociale (MSMPS). Dintre acestea, 3 914 de persoane au fost vaccinate cu p…"
    },
    {
        title:"Membrii Asociației „Părinți Solidari”, nemulțumiți de modalitatea de organizare a procesului educațional. Aceștia anunță o acțiune de protest, pe 1 septembrie, în fața Guvernului",
        time:'16:00',
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/guvern--1920x1020-c-default.jpg",
        content:"Reprezentanții Asociației Obștești (AO) „Părinți Solidari” se arată nemulțumiți față de modalitatea de organizare a procesului educațional (în format mixt), dar și față de noile măsuri de sănătate publică. Astf…"
    },
    {
        title:"Raioanele în care se atestă cea mai înaltă și cea mai redusă rată de vaccinare împotriva COVID-19",
        time:'16:00',
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/07/vaccinare-1920x1020-c-default.png",
        content:"Cea mai înaltă rată de vaccinare cu schema completă a fost înregistrată în municipiul Chișinău – 30%, raionul Soroca – 22%, raionul Dubăsari – 22% și raionul Orhei -21%. În același timp, cea mai redusă acoperir…"
    },
    {
        title:"Autoritățile din sănătate anunță că se atestă o creștere a numărului de cazuri de infectare cu COVID-19 comparativ cu săptămâna precedentă: în rândul copiilor – de la 188 la 232",
        time:'16:00',
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/NS32IE6UUBKUFDTNRBMSYMUPKA-600x369-1-1920x1020-c-default.jpg",
        content:"Reprezentanții Ministerului Sănătății, Muncii și Protecției Sociale (MSMPS) anunță că se atestă o creștere a numărului de cazuri de infectare cu COVID-19, cu 7% (săptămâna 34 – 2556 cazuri) comparativ cu săptăm…"
    },
    {
        title:"Trei decese și 216 cazuri noi de infectare cu COVID-19, confirmate în ultimele 24 de ore",
        time:'16:00',
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/coronavirus-1-1920x1020-c-default.jpg",
        content:"Trei decese și alte 216 de cazuri noi de infectare cu COVID-19 au fost confirmate luni, 30 august, în R. Moldova, dintre care 189 – în rândul persoanelor nevaccinate, anunță Ministerul Sănătății, Mun…"
    }
]
function Body() {
    const [activeTab, setActiveTab] = useState(0);
    const [news,setNews]=useState(recentNews);
    const [recommendedNews,setRecommendedNews]=useState(RecommendedNews);
    const [breakingNews,setBreakingNews]=useState(BREAKING)
    const onSelectTab=(tab,news)=>{
        setActiveTab(tab);
        setNews(news);
    }
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
                                onClick={()=>{onSelectTab(0,recentNews)}}
                            >Noi</a>
                        </li>
                        <li className="nav-item">
                            <a className={activeTab===1?"nav-link fs-5 fw-bold text-dark":"nav-link fs-5 fw-bold text-black-50"} 
                            href="#" 
                            onClick={()=>{onSelectTab(1,popularNews)}}
                            >Populare</a>
                        </li>
                    </ul>
                    <div className="container-fluid p-0  ">
                    <NewsFeed tab={news} type='sidebar'></NewsFeed>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-4 order-2">
                <ImportantNews data={breakingNews} type='main'></ImportantNews>
                </div>

                <div className="col col-lg-4 col-sm-4 order-3 " style={{backgroundColor:'#FFFCDF'}}>
                <Recommended data={recommendedNews} type='recomended'></Recommended>
                </div>
            </div>
        </div>
    )
}

export default Body
