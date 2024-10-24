import Footer from "./component/Footer";
import Header from "./component/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import logo from "../public/firstlogo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "  First Lego Leaque Nigeria",
  description:
    "First Lego League Nigeria is a STEM-focused program that encourages young students to explore science, technology, engineering, and math through hands-on learning and robotics. Part of the global First Lego League initiative, it inspires innovation and teamwork among children aged 9-16 in Nigeria, helping them develop critical thinking, problem-solving, and coding skills by tackling real-world challenges. The program fosters a spirit of collaboration and creativity, preparing the next generation of leaders and innovators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Using the correct favicon path */}
        <link
          rel="icon"
          href="/firstlogo.png"
          type="image/png"
          className="w-20"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
