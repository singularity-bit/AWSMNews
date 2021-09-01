import React,{useState} from 'react'
import MainNews from './MainNews'
import OtherNews from './OtherNews'
//it has to be fetched 5 news articles
const data=[
    {
        title:"FOTO/ Peste 6 600 de doze de vaccin împotriva COVID-19, administrate în ultimele 24 de ore",
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/vaccinare-1-1920x1020-c-default.jpg",
        content:"În ultimele 24 de ore au fost administrate 6 685 de doze de vaccin împotriva COVID-19, anunță Ministerul Sănătății, Muncii și Protecției Sociale (MSMPS). Dintre acestea, 3 914 de persoane au fost vaccinate cu p…"
    },
    {
        title:"Membrii Asociației „Părinți Solidari”, nemulțumiți de modalitatea de organizare a procesului educațional. Aceștia anunță o acțiune de protest, pe 1 septembrie, în fața Guvernului",
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/guvern--1920x1020-c-default.jpg",
        content:"Reprezentanții Asociației Obștești (AO) „Părinți Solidari” se arată nemulțumiți față de modalitatea de organizare a procesului educațional (în format mixt), dar și față de noile măsuri de sănătate publică. Astf…"
    },
    {
        title:"Raioanele în care se atestă cea mai înaltă și cea mai redusă rată de vaccinare împotriva COVID-19",
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/07/vaccinare-1920x1020-c-default.png",
        content:"Cea mai înaltă rată de vaccinare cu schema completă a fost înregistrată în municipiul Chișinău – 30%, raionul Soroca – 22%, raionul Dubăsari – 22% și raionul Orhei -21%. În același timp, cea mai redusă acoperir…"
    },
    {
        title:"Autoritățile din sănătate anunță că se atestă o creștere a numărului de cazuri de infectare cu COVID-19 comparativ cu săptămâna precedentă: în rândul copiilor – de la 188 la 232",
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/NS32IE6UUBKUFDTNRBMSYMUPKA-600x369-1-1920x1020-c-default.jpg",
        content:"Reprezentanții Ministerului Sănătății, Muncii și Protecției Sociale (MSMPS) anunță că se atestă o creștere a numărului de cazuri de infectare cu COVID-19, cu 7% (săptămâna 34 – 2556 cazuri) comparativ cu săptăm…"
    },
    {
        title:"Trei decese și 216 cazuri noi de infectare cu COVID-19, confirmate în ultimele 24 de ore",
        tag:"IMPORTANTE",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/coronavirus-1-1920x1020-c-default.jpg",
        content:"Trei decese și alte 216 de cazuri noi de infectare cu COVID-19 au fost confirmate luni, 30 august, în R. Moldova, dintre care 189 – în rândul persoanelor nevaccinate, anunță Ministerul Sănătății, Mun…"
    }
]
function Importante() {
    const [news,setNews]=useState(data);

    return (
        <div className="border-end border-start">
            <div className="nav-link">
                <h5 className="m-0 p-0 fw-bold text-black-50">BREAKING NEWS</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MainNews article={news[0]}></MainNews>
                    </div>
                </div>
                <div className="row">
                    <div className="col border-end">
                    <OtherNews article={news[1]}></OtherNews>
                    </div>
                    <div className="col">
                    <OtherNews article={news[2]}></OtherNews>
                    </div>
                </div>
                <div className="row">
                    <div className="col border-end">
                    <OtherNews article={news[3]}></OtherNews>
                    </div>
                    <div className="col ">
                    <OtherNews article={news[4]}></OtherNews>
                    </div>
                </div>       
            </div>
            
        </div>
    )
}

export default Importante
