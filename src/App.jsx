import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";

export default function App() {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const scaleFactor = 1 / (window.devicePixelRatio || 1);
      const newZoomLevel = 100 * scaleFactor;
      const minZoom = 25;
      const maxZoom = 500;
      setZoomLevel(Math.min(Math.max(newZoomLevel, minZoom), maxZoom));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const zoomStyle = {
    zoom: `${zoomLevel}%`,
  };
  return (
    <>
      <Header style={zoomStyle} />
      <Hero style={zoomStyle} />
      <About style={zoomStyle} />
      <Portfolio style={zoomStyle} />
      <Footer style={zoomStyle} />
    </>
  );
}
