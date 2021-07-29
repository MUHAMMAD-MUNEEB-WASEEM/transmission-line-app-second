import React from 'react';
import './MainTransmisson.css'
import { Link } from 'react-router-dom';
//components
import TransmissonLine from '../TransmissonLine/TransmissonLine';

//images importing

import image1 from '../images/image_1.jpeg'
import image2 from '../images/image_2.jpeg'
import image3 from '../images/image_3.jpeg'
import image4 from '../images/image_4.jpeg'
import image5 from '../images/image_5.jpg'
import image6 from '../images/image_6.jpeg'


function MainTransmission() {
    return (
        <div className="app">

            <div className="topbar">

                <h1 className="main__heading">Transmission Line Analyses</h1>
                <div className="app__recommendation">
                    <Link to='recommendation'>
                        <button className="transmissonline__button">Recommendations</button>
                    </Link>
                </div>

            </div>
        
            <div className="transmisson">
                <TransmissonLine title="Geometry 1" image={image1}/>
                <TransmissonLine title="Geometry 2" image={image2}/>
                <TransmissonLine title="Geometry 3" image={image3}/>
                <TransmissonLine title="Geometry 4" image={image4}/>
                <TransmissonLine title="Geometry 5" image={image5}/>
                <TransmissonLine title="Geometry 6" image={image6}/>
            </div>
        </div>
    )
}

export default MainTransmission
