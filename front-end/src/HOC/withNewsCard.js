import React from 'react'
import StandardCard from '../Components/Cards/StandardCard';
import HorizontalCard from '../Components/Cards/HorizontalCard';

function WithNewsCard(Component) {
    return function WithNewsCardComponent({...props}){

        //formating options
        const options={hour:'2-digit',minute:'2-digit'}

        //copy article obj
        let items={...props.article}
        
        //formating time
        const date=new Date(items.createdAt);
        const time=date.toLocaleTimeString('en-GB',options) 
        
        //mutate the items array with the newsest converted time
        let item={...props.article,createdAt:time}
        items=item

        //update the article array
        props.article={...items}
        
        if(props.type==='news'){
            return <HorizontalCard {...props}/>
        }
        return <StandardCard  {...props}/>
    };
}

export default WithNewsCard
