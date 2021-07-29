import React from 'react'
import FirstGeometry from '../FirstGeometry/FirstGeometry'
import './TransmissionLine.css'
import { Link } from 'react-router-dom';

function TransmissonLine({title}) {
    return (
        <div className="transmissonline"> 
            <h2 className="transmissonline__heading">{title}</h2>
            <Link to="firstgeometry">
                <button className="transmissonline__button">display Geometry</button>
            </Link>
        </div>
    )
}

export default TransmissonLine
