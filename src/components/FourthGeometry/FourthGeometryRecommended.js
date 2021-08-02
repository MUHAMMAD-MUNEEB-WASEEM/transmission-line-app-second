import React, {useState} from 'react';
import './FourthGeometry.css';
import math, {
    atan2, chain, derivative, e, evaluate, tan, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square, LN10, LN2, log2, acos, unit, ceil, format, sin
  } from 'mathjs'
import BarChart from '../Charts/BarChart';


function FourthGeometryRecommended() {
//useState

    //by default
    const [lineVoltage, setLineVoltage] = useState(110*1000)
    const [windPressure, setWindPressure] = useState(48.23); //should be taken from user
    const [conductorLength, setConductorLength] = useState(100);
    const [Pr, setPr] = useState(40*1000000);
    const [span, setSpan] = useState(200);
    const [interPhaseDistance1, setInterPhaseDistance1] = useState(3)
    const [interPhaseDistance2, setInterPhaseDistance2] = useState(3)
    const [outerPhaseDistance, setOuterPhaseDistance] = useState(6);
    const [overAllDiameter, setOverAllDiameter] = useState(21*0.001);
    const [eachDiameter, setEachDiameter] = useState(3); //mm
    const [weight, setWeight] = useState(974);
    const [ultimateStrength, setUltimateStrength] = useState(92.30*1000)

    console.log(lineVoltage)

    //L and C
    const forDeq = multiply(interPhaseDistance1, interPhaseDistance2, outerPhaseDistance)
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

    const R = 0.1363;

    const R85 = multiply(divide(add(228, 75), add(228, 20)), R) * conductorLength;
    console.log("R85", R85);

    console.log('resistance', R)
    
    const XL = multiply(2, 3.142, 50, L)*conductorLength       //To be updated with new inductance value

    const Z = complex(R85,XL);


    console.log("Z", Z)

    const ZReFormat = format(Z.re, 4);
    const ZImFormat = format(Z.im, 4);

    const Pfr = 0.95

    const A = add(1,multiply(Z,multiply(0.5, Y)))
    console.log("A", A)

    const C = add(1,multiply(Z,multiply(0.25,Y)))
    console.log("C", C);

    const Ir = divide(Pr,(multiply(sqrt(3),lineVoltage,Pfr)));
    console.log("Ir", Ir);

    const IrAngle = multiply(acos(Pfr),divide(180,3.142));
    console.log("Ir Angle", IrAngle)

    const Irx = multiply(Ir, cos(unit(IrAngle, 'deg')));
    console.log("Irx", Irx);

    const Iry = multiply(Ir, sin(unit(IrAngle, 'deg')));
    console.log("Iry", Iry);

    const RectIr = subtract(Irx, multiply(Iry, sqrt(-1)))
    console.log("RectIr", RectIr)

    const Vr = multiply(lineVoltage, 0.57735);  //full load
    console.log("Vr", Vr)

    const Vs = add(multiply(A,Vr), multiply(Z,RectIr))
    console.log("Vs", Vs);

    const VsMag = sqrt(add(square(Vs.re), square(Vs.im)));
    console.log("VsMag", VsMag);

    const VsAngle = multiply(atan(divide(Vs.im, Vs.re)),180/3.142);
    console.log("Vsangle", VsAngle);
      
    const Is = add(multiply(C, multiply(Vr,Y)),multiply(A, RectIr))
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

    const ZC = 300

    const SIL = format(divide(square(lineVoltage),ZC),{notation: 'exponential'})

    //Line efficiency

    const lineEfficiency = format(divide(Pr,add(Pr, multiply(3, square(Ir), R85)))*100, 5);
    console.log(lineEfficiency)

    //Voltage Regulation
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

    const [F, setF] = useState(0.012)

    console.log("F", F)
    const coronaLoss = format(divide(multiply(0.000021, 50, square(Vr*0.001), F), square(log(divide(Deq,r),10))),5)
    console.log("Corona Loss", coronaLoss);

    const totalCoronaLoss = format(coronaLoss*3*conductorLength, 6);

    //sag
    const areaOfStrand = multiply(3.142, 0.25, square(eachDiameter/1000)) //sq-m
    console.log("Area of Strand", areaOfStrand);

    const E = 815800 //  N/sq-m
 
    const alpha = 0.0000178 // per deg c

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


    console.log(windPressure)

    //Recommendation

    const oldPfr = 0.8;

    const oldTanPfr = tan(acos(oldPfr))
    console.log('tanPfr', oldTanPfr);

    const oldRecieveReactivePower = format(multiply(Pr, oldTanPfr),3)
    console.log("Old Reactive Power", oldRecieveReactivePower)

    const PfrNew = 0.95;

    const newTanPfr = tan(acos(PfrNew))
    console.log('tanPfr', oldTanPfr);

    const newRecieveReactivePower = format(multiply(Pr, newTanPfr),2);
    console.log("New Reactive Power", newRecieveReactivePower)

    const capacityOfShuntCapacitor = format(oldRecieveReactivePower - newRecieveReactivePower,2);
    console.log("shunt capacitor capacity",capacityOfShuntCapacitor)
    
    return (
      <div className="geometry">
          <h1 className="parameters__heading">Transmission Line Parameters</h1>
          <div className="sides">
            <div className="geometry__content">
                <h4>Reactive Power Old: {oldRecieveReactivePower} VAR</h4>
                <h4>Reactive Power New: {newRecieveReactivePower} VAR</h4>
                <h4>Capacity of Shunt Compensation: {capacityOfShuntCapacitor} VAR</h4>
                <br/>
                <h3>**** Calculated Results ****</h3>
                <br/>
                <h4>Efficiency: {efficiency}%</h4>
                {/* <h4>SIL: {SIL} W</h4> */}
                <h4>Line Efficiency: {lineEfficiency}</h4>
                <h4>Power Factor: {Pfs}</h4>
                <h4>Voltage Regulation: {voltageRegulation}</h4>
              </div>

          </div>  
            <div className="chart__section">
                <h2 className="chart__heading">Comparision</h2>  
                <div className="geometry__chart">
                    
                    <div style={{height: "800px", width: "400px", marginLeft: "80px", marginRight: "170px"}}>
                        <BarChart title1="Line Efficiency" title2="Power Factor" value1="92.08" value2="80" title="Original Transmission Line" ylabel=""/>
                    </div>
                    <div style={{height: "800px", width: "400px"}}>
                        <BarChart title1="Line Efficiency" title2="Power Factor" value1="94.874" value2="95" title="Our Recommendation" ylabel=""/>
                    </div>
            </div>
          </div>
      </div>
  )
}

export default FourthGeometryRecommended