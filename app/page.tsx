import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solution from "./components/Solution";
import AutoScroll from "./components/AutoScroll";
import ProductFeatures from "./components/Product";
import Technical from "./components/Technical";
import Application from "./components/Application";
import AboutCompany from "./components/AboutCompany";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Solution />
      <AutoScroll />
      <ProductFeatures />
      <Technical />
      <Application />
      <AboutCompany />
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
