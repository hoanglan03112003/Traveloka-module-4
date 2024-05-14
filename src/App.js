import "./Component/travelokecss/traveloke.scss";
import HeaderAirplaneComponent from "./Component/traveloke-airplane/headerAirplane";
import FooterAirplaneComponent from "./Component/traveloke-airplane/footerAirplane";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainAipPlane from "./Component/traveloke-airplane/MainAipPlane";
import MainRentCarComponent from "./Component/traveloke-rentcar/MainRentCarComponent";

function App() {
  return (
    <>
      <HeaderAirplaneComponent />
          <Routes>
            <Route path="/" element={<MainAipPlane />} />
          </Routes>
          <Routes>
            <Route path="/Air" element={<MainRentCarComponent />}/>
          </Routes>
      <FooterAirplaneComponent />
    </>
  );
}

export default App;
