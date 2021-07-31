import React from 'react'
import './Features.css';

function Features({title, point1, point2, point3, point4}) {
    return (
        <div className="features">
            
            <div className="features__heading">
                <h2 >{title}</h2>
            </div>
           <div className="features__point"> 
                <p>{point1}</p>
                <p>{point2}</p>
                <p>{point3}</p>
                <p>{point4}</p>
            </div>
        </div>
    )
}

export default Features
