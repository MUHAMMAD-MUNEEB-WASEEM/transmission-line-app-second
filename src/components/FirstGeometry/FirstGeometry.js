import React, {useState} from 'react';
import './FirstGeometry.css';
import math, {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square
  } from 'mathjs'

function FirstGeometry() {


//useState

    //by default
    const [heightOfTower, setHeightOfTower] = useState(10)
    const [lineVoltage, setLineVoltage] = useState(400*1000)
    const [typesOfInsulators, setTypesOfInsulators] = useState('Suspension Type')
    const [typeOfConductors, setTypeOfConductors] = useState('Bundled');
    const [conductorMaterial, setConductorMaterial] = useState('ACSR');
    const [typeOfConductorSupport, setTypeOfConductorSupport] = useState('Tower');
    const [voltageLevel, setVoltageLevel] = useState('AC')
    const [sizeOfEarthWires, setsizeOfEarthWires] = useState('7/3.66');
    const [groundClearance, setGroundClearance] = useState(15);
    const [archingHorn, setArchingHorn] = useState('Present');
    const [lineConfiguration, setLineConfiguration] = useState('Vertical Parallel')
    const [conductorCrossSectionalArea, setConductorCrossSectionalArea] = useState(5.97)
    const [typeOfCircuits, setTypeOfCircuits] = useState('Double');
    const [earthWire, setEarthWire] = useState('Present')
    const [bundledConductors, setBundledConductors] = useState('Triangular')
    const [conductorSupportLevel, setConductorSupportLevel] = useState('Equal')
    const [noOfDisc, setNoOfDisc] = useState('37')
    const [typeOfDamper, setTypeOfDamper] = useState('Stock Bridge Damper')
    const [loadingFactor, setLoadingFactor] = useState('No')
    const [guardRing, setGuardRing] = useState('Yes');
    const [temperature, setTemperature] = useState(32);
    const [windPressure, setWindPressure] = useState(68.10);
    const [windVelocity, setWindVelocity] = useState(39);
    const [sizeOfPhaseConductor, setSizeOfPhaseConductor] = useState('54 / 3.53 mm AL + 7 / 3.53 mm steel');
    const [numberOfInsulators, setNumberOfInsulators] = useState(6);
    const [conductorWeight, setConductorWeight] = useState(19.6);
    const [conductorLength, setConductorLength] = useState(200);
    const [Pr, setPr] = useState(200*1000000)


    //input
    const [lengthOfCrossArm, setLengthOfCrossArm] = useState(0)
    const [totalNoOfSpacers, setTotalNoOfSpacers] = useState(0);
    const [spacingBetweenBundledConductors, setSpacingBetweenBundledConductors] = useState(0)
    const [Cap, setCap] = useState(100);

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

    const result = Math.sqrt(4);

    // const sendMessage = (e) => {

    //     e.preventDefault(); //avoiding from refresh
    //     setLineVoltage(0)
    // }

    console.log(lineVoltage)

    //Efficiency

    // Vs, Vr, Is, Ir, Pfs, Pfr, Z(R and X), R(L and A), X(L), Pr 

    //Vr = 400kv
    //pr = 200MW
    //pfr = 0.85
    //Ir known from above values

    const row = 0.00000000001729 //km
    const R =  (row*conductorLength)/(5.97*0.000000001)

    console.log('resistance', R)
    
    const XL = 2*3.142*(50)*1.473*0.000000001       //To be updated with new inductance value

    const Z = complex(R,XL);
    // const Z = 0.57 //to be updated with imaginart
    // const a = complex(4, 0);
    // const b = complex(5, 2)
    // const com = add(a,b)
    // const mult = multiply(com, 2)
    // console.log(mult)
    // console.log(com)

    const A = add(1,multiply(Z,0.5*0.000001))
    const C = add(0.000001,multiply(Z,0.25*0.000001))
    const Ir = Pr/(Math.sqrt(3)*lineVoltage*0.80)

    const Vs = add(multiply(A,lineVoltage), multiply(Z,Ir))
    const VsAngle = multiply(atan(divide(Vs.im, Vs.re)),180/3.142);
    
    // const VsLineMagStar = multiply(sqrt(3),sqrt(add(square(Vs.re), square(Vs.im)))) //start connection
    // const VsAngleStar = add(VsAngle, 30);
    // console.log(VsLineMagStar)
      
    const Is = add(multiply(C, lineVoltage),multiply(A, Ir)) 
    const IsAngle = multiply(atan(divide(Is.im, Is.re)),180/3.142);

    console.log('vs', Vs)
    console.log('Is', Is)

    const Pfs = cos(add(VsAngle, IsAngle));
    console.log("power factor", Pfs)

    const Ps = multiply(sqrt(3),(Vs.re),(Is.re),Pfs);

    console.log("sending power", Ps);


    const efficiency = multiply(divide(Pr,Ps),100);

    console.log(efficiency)

    //Voltage Regulation

    //Surge Impedence Loading

    const ZC = 200

    const SIL = divide(square(lineVoltage),ZC)

    //Line efficiency

    const R85 = multiply(divide(add(228, 85), add(228, 32)), R) * conductorLength;
    console.log("R85", R85);

    const lineEfficiency = divide(Pr,add(Pr, multiply(3, square(Ir), R85)))*100;
    console.log(lineEfficiency)


    return (
        <div className="geometry">

            <div className="geometry__content">
                <h1>Transmission Line Parameters</h1>

                {/* <h4>Line Voltage: <input value={lineVoltage} onChange={e => setLineVoltage(e.target.value)} placeholder="Type a message" type="text"/></h4> */}
                
                <h4>Line Voltage: {lineVoltage} kV </h4>
                <h4>Type of Circuits: {typeOfCircuits}</h4>
                <h4>Type Of Conductor Support: {typeOfConductorSupport}</h4>
                <h4>Conductor Length: {conductorLength} km</h4>
                <h4>Conductor Weight: {conductorWeight} N/m</h4>
                <h4>Type Of Conductors: {typeOfConductors}</h4>
                <h4>Height of Tower: {heightOfTower}</h4>
                <h4>Size of Phase Conductors: {sizeOfPhaseConductor}</h4>
                <h4>Voltage Level: {voltageLevel}</h4>
                <h4>Arcing Horn: {archingHorn}</h4>
                <h4>Line Configuration: {lineConfiguration}</h4>
                <h4>Conductor Cross Sectional Area: {conductorCrossSectionalArea} sqcm</h4>
                <h4>Conductor Material: {conductorMaterial}</h4>
                <h4>Earth Wire: {earthWire}</h4>
                <h4>Size of Earth Wires: {sizeOfEarthWires}</h4>
                <h4>Conductor Support Level: {conductorSupportLevel}</h4>
                <h4>Bundled Conductors: {bundledConductors}</h4>
                <h4>Types Of Insulators: {typesOfInsulators}</h4>
                <h4>No of insulator dics in one string: {noOfDisc}</h4>
                <h4>Number of Insulators: {numberOfInsulators}</h4>
                <h4>Ground Clearance: {groundClearance} m</h4>
                <h4>Loading Factors: {loadingFactor}</h4>
                <h4>Type of Dampers: {typeOfDamper}</h4>
                <h4>Tower Type: Suspension Tower</h4>
                <h4>Vibrations: Resonant</h4>
                <h4>Guard Ring/Corona Ring: {guardRing}</h4>
                <h4>Wind Pressure: {windPressure} kg/sqm</h4>
                <h4>Wind Velocity: {windVelocity} m/s</h4>
                <h4>Temperature: {temperature}</h4>
                <h4>Result: {result}</h4>
                <h4>Spacing between bundled conductors: {spacingBetweenBundledConductors}</h4>
                <h4>Spacing between phase conductors: ft</h4>
                <h4>Sag:  </h4>
                <h4>Distance between Towers: m </h4>
                <h4>Length of Cross Arms: </h4>
                <h4>Distance between Cross Arms And Tower(optional): </h4>
                <h4>Total Number of Spacers between two towers: </h4>
                <h4>Inductance: </h4>
                <h4>Capacitance: <input value={Cap} onChange={e => setCap(e.target.value)} placeholder="Input Capacitance" type="number"/></h4>
                <h4>Impedence: </h4>
                <h4>Efficiency: {efficiency}%</h4>
                <h4>SIL: {SIL} W</h4>
                <h4>Line Efficiency: {lineEfficiency}</h4>

                {/**/}
            </div>  
        </div>
    )
}

export default FirstGeometry
