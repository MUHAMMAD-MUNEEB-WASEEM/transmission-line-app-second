import './App.css';
import TransmissonLine from './components/TransmissonLine/TransmissonLine';
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import FirstGeometry from './components/FirstGeometry/FirstGeometry';
import MainTransmission from './components/MainTransmission/MainTransmission';
import SecondGeometry from './components/SecondGeometry/SecondGeometry';
import ThirdGeometry from './components/ThirdGeometry/ThirdGeometry';
import FourthGeometry from './components/FourthGeometry/FourthGeometry';
import FifthGeometry from './components/FifthGeometry/FifthGeometry';
import SixthGeometry from './components/SixthGeometry/SixthGeometry';
import FourthGeometryRecommended from './components/FourthGeometry/FourthGeometryRecommended';
import FourthGeometryRecommended2 from './components/FourthGeometry/FourthGeometryRecommended2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainTransmission/>}></Route>
        <Route path='firstgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/secondgeometry' element={<SecondGeometry/>}></Route>
        <Route path='/thirdgeometry' element={<ThirdGeometry/>}></Route>
        <Route path='/fourthgeometry' element={<FourthGeometry/>}></Route>
        <Route path='/fifthgeometry' element={<FifthGeometry/>}></Route>
        <Route path='/sixthgeometry' element={<SixthGeometry/>}></Route>
        <Route path='/fourthgeometry/recommendation1' element={<FourthGeometryRecommended/>}></Route>
        <Route path='/fourthgeometry/recommendation2' element={<FourthGeometryRecommended2/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
