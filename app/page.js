import Navbar from "../components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
