import React from "react";
import MainAirplaneComponent2 from "./mainAirplaneComponent2";
import MainAirplaneComponent from "./mainAirplaneComponent1";
import NavAirplaneComponent from "./navAirplane";

function MainAipPlane() {
  return (
    <>
      <NavAirplaneComponent />
      <MainAirplaneComponent />
      <MainAirplaneComponent2 />
    </>
  );
}

export default MainAipPlane;
