"use client"
import React from "react";
import HomeOfferProductSlider from "./HomeOfferProductSlider";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import TeamHero from "./TeamHero";
import HomeContact from "../home/HomeContact";
const AboutMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="ourTeam" />
      <TeamHero />
      <HomeOfferProductSlider />
      <HomeContact />
    </>
  );
};

export default AboutMain;
