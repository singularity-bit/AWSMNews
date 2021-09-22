import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import ArticleTemplate from '../Components/ArticleTemplate';
import axios from 'axios';
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
function Article() {

    //to get url params
    let { article,category }=useParams()
   
    const [newsArticle, setnewsArticle] = useState({})
    const [isLoading,setIsLoading]=useState(true)
    let [color, setColor] = useState("black");
    const override = css`
    display: block;
    margin: auto auto;
    border-color: black;
    `;

    useEffect(()=>{
        //decode the URI in plain text
        let articleTitle=decodeURIComponent(article)
        //fetch article by title
        axios.get(`http://localhost:3001/news/${category}/${articleTitle}`)
            .then(result=>{
                console.log("result data",result.data[0]);
                setnewsArticle(result.data[0]);
                setIsLoading(false)
            }
            )
            .catch(err=>console.log(err))
    },[])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                {isLoading?
                    <PuffLoader color={color} loading={isLoading} css={override} size={60}/>:
                    <ArticleTemplate article={newsArticle}/>                     
                    }                
                </div>
            </div>
        </div>
    )
}

export default Article
