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

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Creative />
      {/* <Conter />
      <Cards /> */}
      <Blog />
      <Partners />
      <Footer />
    </div>
  );
}
