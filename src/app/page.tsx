import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHubNetwork from "@/components/GitHubNetwork";
import IndustrialProjects from "@/components/IndustrialProjects";
import Patents from "@/components/Patents";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div id="home">
      <Welcome />

      <About />

      <Experience />

      <Technologies />

      <IndustrialProjects />

      <Projects />

      <Achievements />

      <Patents />

      <GitHubNetwork />

      <Footer />
    </div>
  );
}
