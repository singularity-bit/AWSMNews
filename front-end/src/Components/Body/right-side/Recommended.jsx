import React,{useState} from 'react'
import MainNews from '../main-side/MainNews'
import OtherNews from '../main-side/OtherNews';

const data=[
    {
        title:"A deschis o școală de limba română la Sankt Petersburg: „După prima mea vizită la București, eram îndrăgostită total”",
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2020/12/789-Litta-3-1920x1020-c-default.jpg",
        content:"Litta Spirina s-a născut la Chișinău, într-o familie de etnici ruși și a rămas să locuiască aici, cu unele pauze, timp de 8 ani. Ulterior, a plecat în Rusia, stabilindu-se cu traiul la Sankt Petersburg, iar dup…"
    },
    {
        title:"Afganistanul moldovenesc",
        tag:"EDITORIALE",
        image:"https://www.zdg.md/wp-content/uploads/2020/09/775-EDITORIAL-ALINA-RADU-RO-1920x1020-c-default.jpg",
        content:"Despre sicriele de zinc am auzit prima dată în satul meu, în anii ‘80. Eram copil și credeam că toate sicriele sunt groaznice, pentru că așa le e menirea, să ducă morții prin sat, dar iată că apăruseră sicrie ș…"
    },
    {
        title:"FOTO/ Cum arată casa noului șef interimar al IGP, pe care susține că a cumpărat-o cu 45 de mii de euro",
        tag:"ANCHETA",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/Casa-lui-Lilian-Carabet-1-1920x1020-c-default.jpg",
        content:"Lilian Carabeț, noul șef interimar al Inspectoratului General al Poliției, locuiește într-o casă de milioane, amplasată într-o zonă selectă din Dumbrava, o suburbie a Chișinăului. Familia Carabeț a cumpărat bun…"
    },
    {
        title:"Mormântul mamei din cimitirul de la Ciuciulea, mi-a implantat rădăcini în Moldova și m-a „readus” acasă",
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/820-maria-vizdoaga2-1920x1020-c-default.jpg",
        content:"Interviu cu Maria Vîzdoagă, Biroul Vizdoaga Law Office, New York…"
    }
]
function Recommended() {
    const [news,setNews]=useState(data);
    return (
        <div>
            <div className="nav-link">
                <h5 className="m-0 p-0 fw-bold text-black-50">RECOMMENDED</h5>
            </div>
            <div className="container bg-transparent">
            <div className="row">
                    <div className="col">
                        <OtherNews article={news[0]}></OtherNews>
                    </div>
            </div>
            <div className="row">
                    <div className="col">
                        <OtherNews article={news[1]}></OtherNews>
                    </div>
            </div>
            <div className="row">
                    <div className="col">
                        <OtherNews article={news[2]}></OtherNews>
                    </div>
            </div>
            <div className="row">
                    <div className="col">
                        <OtherNews article={news[3]}></OtherNews>
                    </div>
            </div>
                
                            
            </div>
        </div>
    )
}

export default Recommended
