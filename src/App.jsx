import { Routes, Route } from 'react-router-dom';

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
// import OurMemberPage from "./pages/OurMemberPage";
// import AboutMemberPage from "./pages/AboutMemberPage";
// import FaqPage from "./pages/FaqPage";


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App
