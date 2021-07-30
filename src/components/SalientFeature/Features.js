import React from 'react'
import './Features.css';

function Features({title}) {
    return (
        <div className="features">
            
            <div className="features__heading">
                <h2 >{title}</h2>
            </div>
           <div className="features__point"> 
                <p>1. It is very much efficient</p>
                <p>2. Good Voltage Regulation</p>
                <p>3. High SIL</p>
            </div>
        </div>
    )
}

export default Features
