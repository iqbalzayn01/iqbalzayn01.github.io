// import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Portfolio from "../../components/Portfolio";
import Certificates from "../../components/Certificates";
import Experiences from "../../components/Experiences";
import Footer from "../../components/Footer";

export default function Home() {
  // const [zoomLevel, setZoomLevel] = useState(1);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const scaleFactor = 1 / (window.devicePixelRatio || 1);
  //     const newZoomLevel = 100 * scaleFactor;
  //     const minZoom = 25;
  //     const maxZoom = 500;
  //     setZoomLevel(Math.min(Math.max(newZoomLevel, minZoom), maxZoom));
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const zoomStyle = {
  //   zoom: `${zoomLevel}%`,
  // };

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <Certificates />
      <Experiences />
      <Footer />
    </>
  );
}
