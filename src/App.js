import './App.css';
import TransmissonLine from './components/TransmissonLine/TransmissonLine';
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import FirstGeometry from './components/FirstGeometry/FirstGeometry';
import MainTransmission from './components/MainTransmission/MainTransmission';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainTransmission/>}></Route>
        <Route path='firstgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/secondgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/thirdgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/fourthgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/fifthgeometry' element={<FirstGeometry/>}></Route>
        <Route path='/sixthgeometry' element={<FirstGeometry/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
