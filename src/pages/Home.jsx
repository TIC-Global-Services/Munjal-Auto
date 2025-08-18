import React from "react";
import HomeHero from "../components/home/HomeHero";
import DesignTheFuture from "../components/home/DesignTheFuture";
import CompanyProfile from "../components/home/CompanyProfile";
import WhyMunjalAutos from "../components/home/WhyMunjalAutos";
import StayConnectedCTA from "../components/home/StayConnectedCTA";
import InnovationSlider from "../components/home/InnovationSlider";
import { YouTubeVideo } from "../components/home/YoutubeVideo";
import { CoreValuesSection } from "../components/home/CoreValues";
import { HomeBento } from "../components/home/HomeBento";
import Investors from "../components/home/Investors";
import RandDCapabilities from "../components/home/R&DCapabilities";
import Certifications from "../components/home/Certifications";
import GlobalPresence from "../components/home/GlobalPresense";

const Home = () => {


  return (
    <>
      <div className="mx-auto ">
        <HomeHero />
        <DesignTheFuture />
        <CompanyProfile />
        <WhyMunjalAutos />
        <StayConnectedCTA />
        <InnovationSlider />
        <YouTubeVideo />
        <CoreValuesSection />
        <HomeBento />
        <Investors />
        <RandDCapabilities />
        <Certifications />
        <GlobalPresence />
      </div>
    </>
  );
};

export default Home;
