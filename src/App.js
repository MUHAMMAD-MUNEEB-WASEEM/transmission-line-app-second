import './App.css';
import TransmissonLine from './components/TransmissonLine/TransmissonLine';
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import FirstGeometry from './components/FirstGeometry/FirstGeometry';
import MainTransmission from './components/MainTransmission/MainTransmission';
import Recommendation from './components/Recommendation/Recommendation';
import SecondGeometry from './components/SecondGeometry/SecondGeometry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainTransmission/>}></Route>
        <Route path='firstgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/secondgeometry' element={<SecondGeometry/>}></Route>
        <Route path='/thirdgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/fourthgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/fifthgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/sixthgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/recommendation' element={<Recommendation/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
