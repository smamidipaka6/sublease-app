import './App.css'
import Button from './Components/Button'
import Home from './Components/HomePage';
import ListingCard from "./Components/ListingCard"
import MapPage from './Components/MapPage';
import NavBar from "./Components/NavBar"
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
    
  )
}

export default App
