"use client";

import Image from "next/image";
import Robot from "./component/Robot";
import Hero from "./component/Hero";
import Cards from "./component/Cards";
import Header from "./component/Header";
import Blog from "./component/Blog";
import About from "./component/About";
import Creative from "./component/Creative";
import Partners from "./component/Partners";
import Conter from "./component/Conter";
import Footer from "./component/Footer";
import NumberMetrics from "./component/NumberMetrics";
import Features from "./component/Features";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <NumberMetrics />

      <Creative />
      <Conter />
      <Cards />
      <Features/>
      <Blog />
      <Partners />
      <Footer />
    </div>
  );
}
