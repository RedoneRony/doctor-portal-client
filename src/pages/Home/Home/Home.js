import React from "react";
import Navigaion from "../../../Shared/Navigation/Navigaion";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

function Home() {
  return (
    <div>
      <Navigaion></Navigaion>
      <Banner></Banner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
}

export default Home;
