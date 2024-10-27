// src/app/page.tsx
import About from "@/components/About";
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

      <Resume />
    </div>
  );
}
