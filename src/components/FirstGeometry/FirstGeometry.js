import React, {useState} from 'react';
import './FirstGeometry.css';
import math, {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square, LN10, LN2, log2, acos, unit, ceil, format
  } from 'mathjs'
import GeometryRecommendation from '../SalientFeature/Features';
import Features from '../SalientFeature/Features';

function FirstGeometry() {


//useState

    //by default
    const [heightOfTower, setHeightOfTower] = useState(50)
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
    // const [bundledConductors, setBundledConductors] = useState('Triangular')
    const [conductorSupportLevel, setConductorSupportLevel] = useState('Equal')
    const [noOfDisc, setNoOfDisc] = useState('37')
    const [typeOfDamper, setTypeOfDamper] = useState('Stock Bridge Damper')
    const [loadingFactor, setLoadingFactor] = useState('No')
    const [guardRing, setGuardRing] = useState('Yes');
    const [temperature, setTemperature] = useState(32);
    const [windPressure, setWindPressure] = useState(68.10);
    const [windVelocity, setWindVelocity] = useState(39);
    const [sizeOfPhaseConductor, setSizeOfPhaseConductor] = useState('54/7/3.53 mm');
    const [numberOfInsulators, setNumberOfInsulators] = useState(6);
    const [conductorWeight, setConductorWeight] = useState(19.6);
    const [conductorLength, setConductorLength] = useState(200);
    const [Pr, setPr] = useState(200*1000000);
    const [span, setSpan] = useState(400);
    const [interPhaseDistance1, setInterPhaseDistance1] = useState(8)
    const [interPhaseDistance2, setInterPhaseDistance2] = useState(8)
    const [outerPhaseDistance, setOuterPhaseDistance] = useState(16);
    const [overAllDiameter, setOverAllDiameter] = useState(31.77*0.001);
    const [eachDiameter, setEachDiameter] = useState(3.53); //mm
    const [weight, setWeight] = useState(2222.9);
    const [ultimateStrength, setUltimateStrength] = useState(161*1000)

    //input
    const [lengthOfCrossArm, setLengthOfCrossArm] = useState(0)
    const [totalNoOfSpacers, setTotalNoOfSpacers] = useState(0);
    const [spacingBetweenBundledConductors, setSpacingBetweenBundledConductors] = useState(0)

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

    //L and C
    const forDeq = multiply(8, 8, 16)
    const Deq = pow(forDeq, 1/3)

    console.log("Deq", Deq)

    const r = divide(overAllDiameter, 2)
    console.log("radius", r);

    const GMR = multiply(r, 0.7788);
    console.log("GMR", GMR) 

    const L = format(multiply(0.0000002, log(divide(Deq,GMR),2.718))*1000,{notation: 'exponential'})

    console.log("L", L);

    //C

    const Cap = format(divide(multiply(2, 3.142, 0.00000000885), log(divide(Deq,GMR),2.718)),{notation: 'exponential'})
    console.log("Cap", Cap);

    //Y

    const Y = multiply(sqrt(-1), 2, 3.142, 50, Cap, conductorLength);
    console.log("Y", Y);

       //Efficiency

    // Vs, Vr, Is, Ir, Pfs, Pfr, Z(R and X), R(L and A), X(L), Pr 

    //Vr = 400kv
    //pr = 200MW
    //pfr = 0.85
    //Ir known from above values

    const row = 0.00000000001729 //km
    // const R =  (row*conductorLength)/(5.97*0.000000001)

    const R = 0.0547

    const R85 = multiply(divide(add(228, 75), add(228, 20)), R) * conductorLength;
    console.log("R85", R85);

    console.log('resistance', R)
    
    const XL = multiply(2, 3.142, 50, L)*conductorLength       //To be updated with new inductance value

    const Z = complex(R85,XL);
    // const Z = 0.57 //to be updated with imaginart
    // const a = complex(4, 0);
    // const b = complex(5, 2)
    // const com = add(a,b)
    // const mult = multiply(com, 2)
    // console.log(mult)
    // console.log(com)

    console.log("Z", Z)

    const ZReFormat = format(Z.re, 4);
    const ZImFormat = format(Z.im, 4);

    const Pfr = 0.8

    const A = add(1,multiply(Z,multiply(0.5, Y)))
    console.log("A", A)

    const C = multiply(add(1,multiply(Z,multiply(0.25,Y))), Y)
    console.log("C", C);

    const Ir = divide(Pr,(multiply(sqrt(3),lineVoltage,0.80)));
    console.log("Ir", Ir);

    const IrAngle = multiply(acos(Pfr),divide(180,3.142));
    console.log("Ir Angle", IrAngle)

    const RectIr = subtract(288.037, multiply(215.95, sqrt(-1)))
    console.log("RectIr", RectIr)

    const Vr = multiply(lineVoltage, 0.57735);  //full load
    console.log("Vr", Vr)

    const Vs = add(multiply(A,Vr), multiply(Z,RectIr))
    console.log("Vs", Vs);

    const VsMag = sqrt(add(square(Vs.re), square(Vs.im)));
    console.log("VsMag", VsMag);

    const VsAngle = multiply(atan(divide(Vs.im, Vs.re)),180/3.142);
    console.log("Vsangle", VsAngle);
    
    // const VsLineMagStar = multiply(sqrt(3),sqrt(add(square(Vs.re), square(Vs.im)))) //start connection
    // const VsAngleStar = add(VsAngle, 30);
    // console.log(VsLineMagStar)
      
    const Is = add(multiply(C, Vr),multiply(A, RectIr))
    console.log('Is', Is) 

    const IsMag = sqrt(add(square(Is.re), square(Is.im)))
    console.log("IsMag", IsMag);

    const IsAngle = multiply(atan(divide(Is.im, Is.re)),180/3.142);
    console.log("ISAngle", IsAngle);


    const Pfs = format(cos(unit(subtract(VsAngle,IsAngle), 'deg')),5);
    console.log("power factor", Pfs)

    const Ps = multiply(3,(VsMag),(IsMag),Pfs);

    console.log("sending power", Ps);


    const efficiency = format(multiply(divide(Pr,Ps),100), 5);

    console.log(efficiency)

    //Surge Impedence Loading

    const ZC = 200

    const SIL = format(divide(square(lineVoltage),ZC),{notation: 'exponential'})

    //Line efficiency

    const lineEfficiency = format(divide(Pr,add(Pr, multiply(3, square(Ir), R85)))*100, 5);
    console.log(lineEfficiency)

    //Voltage Regulation
    // const ZMag = sqrt(add(square(Z.re), square(Z.im)));
    // const YMag = sqrt(add(square(Y.re), square(Y.im)));
    const den = add(1, divide(multiply(Z,Y),2))
    const denMag = sqrt(add(square(den.re), square(den.im)));
    console.log("denMag", denMag)

    const VrNoLoad = divide(VsMag,denMag);
    console.log("VrNoLoad", VrNoLoad);

    const voltageRegulation = format(multiply(divide(subtract(VrNoLoad,Vr),Vr),100),5);
    console.log("Voltage Regulation", voltageRegulation);


    //corona loss
    const P = 74 //cm
    const theta = 50 //deg C

    const sigma = divide(multiply(3.86,P),add(273,theta))
    console.log("sigma", sigma);

    const mo = 0.84


    const Vd = divide(multiply(3000000, r, sigma, mo, log(divide(Deq,r),2.718)), 1.414) 
    console.log("Vd", Vd);

    const RatioForF = divide(Vr, Vd);
    console.log("RatioForF", RatioForF);

    const [F, setF] = useState(0.3)

        // if (RatioForF>=1.4) {
        //     setF(0.3);
        // }

    console.log("F", F)
    const coronaLoss = format(divide(multiply(0.000021, 50, square(Vr*0.001), F), square(log(divide(Deq,r),10))),5)
    console.log("Corona Loss", coronaLoss);

    const totalCoronaLoss = format(coronaLoss*3*conductorLength, 6);

    //sag
    const areaOfStrand = multiply(3.142, 0.25, square(eachDiameter/1000)) //sq-m
    console.log("Area of Strand", areaOfStrand);

    const E = 67200000000 //  N/sq-m
 
    const alpha = 0.0000193 // per deg c

    const WNM= weight*0.001*9.8  // N/m    Ft2
    console.log("weight N/m", WNM);

    //bad weather

    const Fw = windPressure*9.8*overAllDiameter  //  N/m
    console.log("Fw", Fw);

    const Ft1 = pow(add(square(WNM), square(Fw)), 0.5);  //   N/m
    console.log("Ft1", Ft1)

    const T1 = ultimateStrength/2.5     //   5 deg C
    console.log("T1", T1);

    //erection condition
    const theta1 = 5 // deg c
    const theta2 = 30 // deg C

    const AEFl24t2 = divide(multiply(areaOfStrand,E,square(Ft1),square(span)), multiply(24, square(T1)));
    console.log("AEFl24t2", AEFl24t2);

    const AEFl24 = divide(areaOfStrand*E*square(WNM)*square(span), 24);
    console.log("AEFl24", AEFl24);

    const alphaAE = multiply(alpha,areaOfStrand,E,subtract(theta2,theta1));
    console.log("alphaAE", alphaAE);

    //solving equation


    function CubicSolve(a, b, c, d){

        b /= a;
        c /= a;
        d /= a;
      
        var discrim, q, r, dum1, s, t, term1, r13;
      
        q = (3.0*c - (b*b))/9.0;
        r = -(27.0*d) + b*(9.0*c - 2.0*(b*b));
        r /= 54.0;
      
        discrim = q*q*q + r*r;
        
        var roots = [ {real: 0, i: 0}, {real: 0, i: 0}, {real: 0, i: 0} ]
        
        term1 = (b/3.0);
      
        if (discrim > 0) { // one root real, two are complex
         s = r + Math.sqrt(discrim);
         s = ((s < 0) ? -Math.pow(-s, (1.0/3.0)) : Math.pow(s, (1.0/3.0)));
         t = r - Math.sqrt(discrim);
         t = ((t < 0) ? -Math.pow(-t, (1.0/3.0)) : Math.pow(t, (1.0/3.0)));
         
         roots[0].real = -term1 + s + t;
         term1 += (s + t)/2.0;
         roots[2].real = roots[1].real = -term1;
         term1 = Math.sqrt(3.0)*(-t + s)/2;
         
         roots[1].i = term1;
         roots[2].i = -term1;
         return roots;
        } // End if (discrim > 0)
      
        // The remaining options are all real
        
      
        if (discrim == 0){ // All roots real, at least two are equal.
         r13 = ((r < 0) ? -Math.pow(-r,(1.0/3.0)) : Math.pow(r,(1.0/3.0)));
         roots[0].real = -term1 + 2.0*r13;
         roots[2].real = roots[1].real = -(r13 + term1);
         return roots;
        } // End if (discrim == 0)
      
        // Only option left is that all roots are real and unequal (to get here, q < 0)
        q = -q;
        dum1 = q*q*q;
        dum1 = Math.acos(r/Math.sqrt(dum1));
        r13 = 2.0*Math.sqrt(q);
        
        roots[0].real = -term1 + r13*Math.cos(dum1/3.0);
        roots[1].real = -term1 + r13*Math.cos((dum1 + 2.0*Math.PI)/3.0);
        roots[2].real = -term1 + r13*Math.cos((dum1 + 4.0*Math.PI)/3.0);
        
        return roots;
      } 

      const T1alphaAE = T1 - alphaAE - AEFl24t2

      console.log("T1alphaAE", T1alphaAE);

    const T2 = ceil((CubicSolve(1, -T1alphaAE, 0, -AEFl24)[0].real))
    console.log("T2", T2);

      //calculating sag


    const sagErrect = format(divide(multiply(WNM, square(span)), multiply(8, T2)),5);
    console.log("SagErrect", sagErrect);

    const sagBad = format(divide(multiply(Ft1, square(span)), multiply(8, T1)),5);
    console.log("SagBad", sagBad);

    const sagVerticalBad = format(multiply(sagBad, atan(divide(Fw,WNM))),5)  //radian
    console.log("sagVerticalBad", sagVerticalBad);

    
    return (
        <div className="geometry">
            <h1 className="parameters__heading">Parameters Of Transmission Line</h1>
            <div className="sides">
              <div className="geometry__content">

                  {/* <h4>Line Voltage: <input value={lineVoltage} onChange={e => setLineVoltage(e.target.value)} placeholder="Type a message" type="text"/></h4> */}
                
                  <h4>Line Voltage: <span className="answer">{lineVoltage} V</span> </h4>
                  <h4>Type of Circuits: {typeOfCircuits}</h4>
                  {/* <h4>Type Of Conductor Support: {typeOfConductorSupport}</h4> */}
                  <h4>Conductor Length: {conductorLength} km</h4>
                  <h4>Conductor Weight: {conductorWeight} N/m</h4>
                  {/* <h4>Type Of Conductors: {typeOfConductors}</h4> */}
                  <h4>Height of Tower: {heightOfTower} m</h4>
                  <h4>Size of Phase Conductors: {sizeOfPhaseConductor}</h4>
                  <h4>Voltage Level: {voltageLevel}</h4>
                  {/* <h4>Arcing Horn: {archingHorn}</h4> */}
                  {/* <h4>Line Configuration: {lineConfiguration}</h4> */}
                  {/* <h4>Conductor Cross Sectional Area: {conductorCrossSectionalArea} sqcm</h4> */}
                  <h4>Conductor Material: {conductorMaterial}</h4>
                  <h4>Earth Wire: {earthWire}</h4>
                  <h4>Size of Earth Wires: {sizeOfEarthWires} mm</h4>
                  {/* <h4>Bundled Conductors: {bundledConductors}</h4> */}
                  {/* <h4>Types Of Insulators: {typesOfInsulators}</h4>
                  <h4>No of insulator dics in one string: {noOfDisc}</h4>
                  <h4>Number of Insulators: {numberOfInsulators}</h4> */}
                  <h4>Ground Clearance: {groundClearance} m</h4>
                  {/* <h4>Loading Factors: {loadingFactor}</h4> */}
                  {/* <h4>Type of Dampers: {typeOfDamper}</h4> */}
                  <h4>Tower Type: Suspension Tower</h4>
                  {/* <h4>Vibrations: Resonant</h4> */}
                  {/* <h4>Guard Ring/Corona Ring: {guardRing}</h4> */}
                  <h4>Wind Pressure:  <input value={windPressure} onChange={e => setWindPressure(e.target.value)} placeholder="Enter Wind Pressure" type="number"/> kg/sqm <br/>(65-70 kg/sqm)</h4>
                  <h4>Wind Velocity: {windVelocity} m/s</h4>
                  <h4>Temperature: {temperature}</h4>
                  {/* <h4>Spacing between bundled conductors: {spacingBetweenBundledConductors}</h4> */}
                  <h4>Spacing between phase conductors: {interPhaseDistance1}, {interPhaseDistance2}, {outerPhaseDistance} m</h4>
                  <h4>Span:  <input value={span} onChange={e => setSpan(e.target.value)} placeholder="Enter Span" type="number"/> m <br/>(380-400 m)</h4>
                  <br/>
                  <h3>**** Calculated Results ****</h3>
                  <br/>
                  <h4>Inductance: {L}</h4>
                  <h4>Capacitance: {Cap} F/kM</h4>
                  <h4>Susceptance: j{Y.im} siemens/phase</h4>
                  <h4>Impedence: {ZReFormat} + j{ZImFormat}</h4>
                  <h4>Efficiency: {efficiency}%</h4>
                  <h4>SIL: {SIL} W</h4>
                  <h4>Line Efficiency: {lineEfficiency}</h4>
                  <h4>Power Factor: {Pfs}</h4>
                  <h4>Voltage Regulation: {voltageRegulation}</h4>
                  <h4>Corona Loss: {coronaLoss} kW/phase/km</h4>
                  <h4>Total Corona Loss: {totalCoronaLoss} kW</h4>
                  <h4>Sag Under Errection Condition: {sagErrect} m</h4>
                  <h4>Sag Under Bad Weather Condition: {sagBad} m</h4>
                  <h4>Vertical Sag Under Bad Weather Condition: {sagVerticalBad}m</h4>
              </div>  
              <div className="geometry__recommendation">
                  <Features title="Salient Features" point1="1. This system has higher efficiency" point2="2. This system is accompanied with high surge imppedence loading"/>
                  <Features title="Recommendations" point1="Issue: High Corona Loss" point2="1. Increasing the distance between conductors" point3="2. Use of bundled conductors"/>
               </div>
          </div>
        </div>
    )
}

export default FirstGeometry
