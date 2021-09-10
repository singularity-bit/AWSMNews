import React,{useEffect} from 'react'
import StandardCard from '../Cards/StandardCard'
import WithNewsCard from '../../HOC/withNewsCard'

const Card=WithNewsCard(StandardCard)

function RecommendedNews({data,type,isLoading}) {
    
    return (
        !isLoading?
        <div className="container bg-transparent">
        <div className="row">
            <div className="col">
                <Card article={data[0]} type={type}></Card>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Card article={data[1]} type={type}></Card>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Card article={data[2]} type={type}></Card>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Card article={data[3]} type={type}></Card>
            </div>
        </div>
    </div>:
        <p>data is fetching...</p>
    )
}

export default RecommendedNews
