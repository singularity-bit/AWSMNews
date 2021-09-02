import React from 'react'

function WithNewsFeed(Component){
    return function WithNewsFeedComponent({style,...data}){
        return <Component style={style} {...data}/>
    };
}
export default WithNewsFeed;
