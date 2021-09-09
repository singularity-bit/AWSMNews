import React from 'react'
import WithNewsCard from '../../HOC/withNewsCard'
import StandardCard from '../Cards/StandardCard';
import { v4 as uuidv4 } from 'uuid';

function CategoryNews({data,style}) {
    
    const Card=WithNewsCard(StandardCard)

    return data.map(item=>{
        return (
            <div className="row py-4" key={uuidv4()}>
                <Card article={item} type={style}></Card>
            </div>
        )
    })
}

export default CategoryNews
