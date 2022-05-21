import '../../styles/body.css'
import React from 'react';

function Body(props)
{
    return(
        <div className='pageContentContainer'>
            {props.children}
        </div>
    )
}

export default Body