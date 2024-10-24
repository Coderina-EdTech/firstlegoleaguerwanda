"use client";

import Image from "next/image";
import Robot from "./component/Robot";
import Hero from "./component/Hero";
import Cards from "./component/Cards";
import Header from "./component/Header";

import About from "./component/About";
import Creative from "./component/Creative";
import Partners from "./component/Partners";
import Conter from "./component/Conter";
import Footer from "./component/Footer";
import NumberMetrics from "./component/NumberMetrics";
import Features from "./component/Features";
import Card from "./component/Card";
import Blog from "./news/page";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <NumberMetrics />
      <Card />

      <Creative />
      <Conter />

      <Features />
      <Blog />
      <Partners />
    </div>
  );
}
