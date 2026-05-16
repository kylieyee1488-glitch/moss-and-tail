import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Spotlight from "@/components/Spotlight";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Pawsletter from "@/components/Pawsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Spotlight />
        <Gallery />
        <Reviews />
        <Pawsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
