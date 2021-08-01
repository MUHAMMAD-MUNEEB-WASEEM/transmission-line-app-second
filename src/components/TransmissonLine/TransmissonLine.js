import React from 'react'
import FirstGeometry from '../FirstGeometry/FirstGeometry'
import './TransmissionLine.css'
import { Link } from 'react-router-dom';


function TransmissonLine({title, image, path}) {
    return (
        <div className="transmissonline"> 
            <h2 className="transmissonline__heading">{title}</h2>
            <img className="transmissionline__image" src={image}/>
            <Link to={path}>
                <button className="transmissonline__button">View Tx Line</button>
            </Link>
        </div>
    )
}

export default TransmissonLine
