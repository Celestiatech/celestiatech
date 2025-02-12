import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppDevelopmentSection from "../component/AppDevelopmentSection";
import ClientSection from "../component/ClientSection";
import LeadsSection from "../component/LeadsSection";
import Services from "../component/Services";
import UpworkSection from "../component/UpworkSection";
import MobileAppSlides from "../component/MobileAppSlides";

function MobileAppDevelopment() {
  return (
    <>
      <AppDevelopmentSection />
      <ClientSection />
      <LeadsSection />
      <Services />
      <UpworkSection />
      <MobileAppSlides />
      
    </>
  );
}

export default MobileAppDevelopment;
