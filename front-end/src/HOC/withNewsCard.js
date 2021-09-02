import React from 'react'

function WithNewsCard(Component) {
    return function WithNewsCardComponent({style,...data}){
        return <Component  style={style} {...data}/>
    };
}

export default WithNewsCard
