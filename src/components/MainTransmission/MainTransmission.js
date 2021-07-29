import React from 'react';
import './MainTransmisson.css'

//components
import TransmissonLine from '../TransmissonLine/TransmissonLine';

function MainTransmission() {
    return (
        <div className="App">
            <h1 className="main__heading">Transmission line app</h1>
        
            <div className="transmisson">
                <TransmissonLine title="Geometry 1"/>
                <TransmissonLine title="Geometry 2"/>
                <TransmissonLine title="Geometry 3"/>
                <TransmissonLine title="Geometry 4"/>
                <TransmissonLine title="Geometry 5"/>
                <TransmissonLine title="Geometry 6"/>
            </div>
        </div>
    )
}

export default MainTransmission
