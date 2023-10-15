import "./App.css";
import Home from './Components/HomePage';
import Button from "./Components/Button";
import GroupDesc from "./Components/ListingCard/GroupDesc";
import ListingCard from "./Components/ListingCard/ListingCard";
import AttributeTag from "./Components/ListingCard/AttributeTags/PeopleAttribute"
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

export default App;
