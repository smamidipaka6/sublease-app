import "./App.css";
import Home from "./Pages/HomePage";
import ListingCard from "./Components/ListingCard/ListingCard";
import MapPage from "./Pages/MapPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar"
import ExtendedView from "./Pages/ExtentedView";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/bookmark" element={<ExtendedView/>} />
      </Routes>
    </>
  );
}

export default App;
