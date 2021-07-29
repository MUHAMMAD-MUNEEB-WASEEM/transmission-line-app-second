import React, {useState} from 'react'
import './FirstGeometry.css'

function FirstGeometry() {

    const line_voltage = 220;
    const size_of_phase_conductors = 10;
    const span = 100;
    const spacing_between_conductors = 10;
    const no_of_earth_wires = 2;
    const size_of_earth_wires = 1;
    const no_of_insulators = 4;
    const sag = 2;

//useState

    const [heightOfTower, setHeightOfTower] = useState(10)
    const [lineVoltage, setLineVoltage] = useState(0)
    const [typeOfCircuits, setTypeOfCircuits] = useState(10)
    const [typeOfConductorSupport, setTypeOfConductorSupport] = useState(10);
    const [typeOfConductors, setTypeOfConductors] = useState(10);
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)
    // const [heightOfTower, setHeightOfTower] = useState(10)

    const result = lineVoltage*typeOfCircuits - 10;

    // const sendMessage = (e) => {

    //     e.preventDefault(); //avoiding from refresh
    //     setLineVoltage(0)
    // }

    console.log(lineVoltage)


    return (
        <div className="geometry">
            <h1>Transmission Line Parameters</h1>
            <h4>Line Voltage:  <input value={lineVoltage} onChange={e => setLineVoltage(e.target.value)} placeholder="Type a message" type="text"/></h4>
            <h4>Type of Circuits: </h4>
            <h4>Type Of Conductor Support:</h4>
            <h4>Type Of Conductors:</h4>
            <h4>Height of Tower: {heightOfTower}</h4>
            <h4>Voltage Level: </h4>
            <h4>Arching Horn: </h4>
            <h4>Line Configuration: </h4>
            <h4>Conductor Cross Sectional Area: </h4>
            <h4>Size of Phase Conductors: {size_of_phase_conductors}</h4>
            <h4>Spacing between phase conductors: {spacing_between_conductors}ft</h4>
            <h4>No of Earth Wires: {no_of_earth_wires}</h4>
            <h4>Size of Earth Wires: {size_of_earth_wires}</h4>
            <h4>Bundled Conductors(Triangular/Rectangular): </h4>
            <h4>Spacing between bundled conductors: </h4>
            <h4>Number of Insulators: {no_of_insulators}</h4>
            <h4>Types Of Insulators: </h4>
            <h4>No of insulator dics in one string: </h4>
            <h4>Sag: {sag} </h4>
            <h4>Ground Clearance: </h4>
            <h4>Conductor Support Level: </h4>
            <h4>Distance between Towers: {span}m </h4>
            <h4>Loading Factors: </h4>
            <h4>Vibrations: </h4>
            <h4>Type of Dampers: </h4>
            <h4>Length of Cross Arms: </h4>
            <h4>Distance between Cross Arms And Tower(optional): </h4>
            <h4>Total Number of Spacers between two towers: </h4>
            <h4>Guard Ring/Corona Ring: </h4>
            <h4>Tower Type: </h4>
            <h4>Insulator Type: </h4>
            <h4>Inductance: </h4>
            <h4>Capacitance: </h4>
            <h4>Impedence: </h4>
            <h4>Wind Pressure: </h4>
            <h4>Wind Velocity: </h4>
            <h4>Temperature: </h4>
            <h4>Humidity: </h4>
            <h4>Result: {result}</h4>
        </div>
    )
}

export default FirstGeometry
