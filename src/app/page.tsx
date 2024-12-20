// src/app/page.tsx
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Technologies from "@/components/Technologies";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div id="home" className="">
      <Welcome />

      <About />

      <Technologies />

      <Projects />

      <Achievements />

      <Resume />

      <Footer />
    </div>
  );
}
