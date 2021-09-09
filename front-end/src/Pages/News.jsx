import React,{useState} from 'react'
import NewsFeedTemplate from '../Components/NewsFeedTemplate'
const RecommendedNews=[
    {
        title:"A deschis o școală de limba română la Sankt Petersburg: „După prima mea vizită la București, eram îndrăgostită total”",
        createdAt:'16:00',
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2020/12/789-Litta-3-1920x1020-c-default.jpg",
        content:"Litta Spirina s-a născut la Chișinău, într-o familie de etnici ruși și a rămas să locuiască aici, cu unele pauze, timp de 8 ani. Ulterior, a plecat în Rusia, stabilindu-se cu traiul la Sankt Petersburg, iar dup…"
    },
    {
        title:"Afganistanul moldovenesc",
        createdAt:'16:00',
        tag:"EDITORIALE",
        image:"https://www.zdg.md/wp-content/uploads/2020/09/775-EDITORIAL-ALINA-RADU-RO-1920x1020-c-default.jpg",
        content:"Despre sicriele de zinc am auzit prima dată în satul meu, în anii ‘80. Eram copil și credeam că toate sicriele sunt groaznice, pentru că așa le e menirea, să ducă morții prin sat, dar iată că apăruseră sicrie ș…"
    },
    {
        title:"FOTO/ Cum arată casa noului șef interimar al IGP, pe care susține că a cumpărat-o cu 45 de mii de euro",
        createdAt:'16:00',
        tag:"ANCHETA",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/Casa-lui-Lilian-Carabet-1-1920x1020-c-default.jpg",
        content:"Lilian Carabeț, noul șef interimar al Inspectoratului General al Poliției, locuiește într-o casă de milioane, amplasată într-o zonă selectă din Dumbrava, o suburbie a Chișinăului. Familia Carabeț a cumpărat bun…"
    },
    {
        title:"Mormântul mamei din cimitirul de la Ciuciulea, mi-a implantat rădăcini în Moldova și m-a „readus” acasă",
        createdAt:'16:00',
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/820-maria-vizdoaga2-1920x1020-c-default.jpg",
        content:"Interviu cu Maria Vîzdoagă, Biroul Vizdoaga Law Office, New York…"
    },
    {
        title:"Afganistanul moldovenesc",
        createdAt:'16:00',
        tag:"EDITORIALE",
        image:"https://www.zdg.md/wp-content/uploads/2020/09/775-EDITORIAL-ALINA-RADU-RO-1920x1020-c-default.jpg",
        content:"Despre sicriele de zinc am auzit prima dată în satul meu, în anii ‘80. Eram copil și credeam că toate sicriele sunt groaznice, pentru că așa le e menirea, să ducă morții prin sat, dar iată că apăruseră sicrie ș…"
    },
    {
        title:"FOTO/ Cum arată casa noului șef interimar al IGP, pe care susține că a cumpărat-o cu 45 de mii de euro",
        createdAt:'16:00',
        tag:"ANCHETA",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/Casa-lui-Lilian-Carabet-1-1920x1020-c-default.jpg",
        content:"Lilian Carabeț, noul șef interimar al Inspectoratului General al Poliției, locuiește într-o casă de milioane, amplasată într-o zonă selectă din Dumbrava, o suburbie a Chișinăului. Familia Carabeț a cumpărat bun…"
    },
    {
        title:"Mormântul mamei din cimitirul de la Ciuciulea, mi-a implantat rădăcini în Moldova și m-a „readus” acasă",
        createdAt:'16:00',
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/820-maria-vizdoaga2-1920x1020-c-default.jpg",
        content:"Interviu cu Maria Vîzdoagă, Biroul Vizdoaga Law Office, New York…"
    },
    {
        title:"Afganistanul moldovenesc",
        createdAt:'16:00',
        tag:"EDITORIALE",
        image:"https://www.zdg.md/wp-content/uploads/2020/09/775-EDITORIAL-ALINA-RADU-RO-1920x1020-c-default.jpg",
        content:"Despre sicriele de zinc am auzit prima dată în satul meu, în anii ‘80. Eram copil și credeam că toate sicriele sunt groaznice, pentru că așa le e menirea, să ducă morții prin sat, dar iată că apăruseră sicrie ș…"
    },
    {
        title:"FOTO/ Cum arată casa noului șef interimar al IGP, pe care susține că a cumpărat-o cu 45 de mii de euro",
        createdAt:'16:00',
        tag:"ANCHETA",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/Casa-lui-Lilian-Carabet-1-1920x1020-c-default.jpg",
        content:"Lilian Carabeț, noul șef interimar al Inspectoratului General al Poliției, locuiește într-o casă de milioane, amplasată într-o zonă selectă din Dumbrava, o suburbie a Chișinăului. Familia Carabeț a cumpărat bun…"
    },
    {
        title:"Mormântul mamei din cimitirul de la Ciuciulea, mi-a implantat rădăcini în Moldova și m-a „readus” acasă",
        createdAt:'16:00',
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/820-maria-vizdoaga2-1920x1020-c-default.jpg",
        content:"Interviu cu Maria Vîzdoagă, Biroul Vizdoaga Law Office, New York…"
    },
    {
        title:"Afganistanul moldovenesc",
        createdAt:'16:00',
        tag:"EDITORIALE",
        image:"https://www.zdg.md/wp-content/uploads/2020/09/775-EDITORIAL-ALINA-RADU-RO-1920x1020-c-default.jpg",
        content:"Despre sicriele de zinc am auzit prima dată în satul meu, în anii ‘80. Eram copil și credeam că toate sicriele sunt groaznice, pentru că așa le e menirea, să ducă morții prin sat, dar iată că apăruseră sicrie ș…"
    },
    {
        title:"FOTO/ Cum arată casa noului șef interimar al IGP, pe care susține că a cumpărat-o cu 45 de mii de euro",
        createdAt:'16:00',
        tag:"ANCHETA",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/Casa-lui-Lilian-Carabet-1-1920x1020-c-default.jpg",
        content:"Lilian Carabeț, noul șef interimar al Inspectoratului General al Poliției, locuiește într-o casă de milioane, amplasată într-o zonă selectă din Dumbrava, o suburbie a Chișinăului. Familia Carabeț a cumpărat bun…"
    },
    {
        title:"Mormântul mamei din cimitirul de la Ciuciulea, mi-a implantat rădăcini în Moldova și m-a „readus” acasă",
        createdAt:'16:00',
        tag:"INTERVIURI",
        image:"https://www.zdg.md/wp-content/uploads/2021/08/820-maria-vizdoaga2-1920x1020-c-default.jpg",
        content:"Interviu cu Maria Vîzdoagă, Biroul Vizdoaga Law Office, New York…"
    }
]
function News() {
    const [recommendedNews,setRecommendedNews]=useState(RecommendedNews);
    return (
        <div className="container">
            <NewsFeedTemplate data={recommendedNews} type='news'/>
        </div>
    )
}

export default News
