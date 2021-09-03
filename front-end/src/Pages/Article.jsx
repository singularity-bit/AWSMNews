import React,{useState,useEffect} from 'react'
import NewsCard from '../Components/NewsCard'
import { useLocation } from "react-router-dom";
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
function Article(props) {
    const [article,setArticle]=useState({})
    const location = useLocation();
    useEffect(()=>{
        const regex=new RegExp('\/.*\/');
        const continut=BREAKING.filter(item=>{
            let stringWithoutPath=location.pathname.replace(regex,'')
            return stringWithoutPath===item.title
        })
        console.log("continnut",continut[0]);
        setArticle(continut[0])
    },[])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <NewsCard type={`highlight`} article={article}/>
                    <div >
                        {article?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
