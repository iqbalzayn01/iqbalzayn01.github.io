import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
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
      <header className=" bg-red-400 px-5 py-10 md:px-20">
        <h1 className="text-2xl text-white font-semibold">Maintenance</h1>
      </header>
      <Header style={zoomStyle} />
      <Hero style={zoomStyle} />
      <Skills style={zoomStyle} />
      <Portfolio style={zoomStyle} />
      <Footer style={zoomStyle} />
    </>
  );
}
