import React from 'react'
import FirstGeometry from '../FirstGeometry/FirstGeometry'
import './TransmissionLine.css'

function TransmissonLine({title}) {
    return (
        <div className="transmissonline"> 
            <h2 className="transmissonline__heading">{title}</h2>
            <button className="transmissonline__button">display Geometry</button>

            {/*NExt component will be add on routing */}
            <FirstGeometry/>
        </div>
    )
}

export default TransmissonLine
