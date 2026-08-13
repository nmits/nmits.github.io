import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
