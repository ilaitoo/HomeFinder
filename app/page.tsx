import Container from "@/components/Container";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import RateSection from "@/components/home/RateSection";
import Image from "next/image";
import MapSection from "@/components/home/MapSection";
import TestimonialsSection from "@/components/home/Testimonials";
import AgentsSection from "@/components/home/AgentsSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <Image
          src="/assets/hero.jpg"
          className="absolute inset-0 object-cover object-center -z-50"
          alt="hero"
          fill
        />
        <Container>
          <Header />
          <Hero />
        </Container>
      </div>

      {/* Rate Section */}
      <section className="bg-black w-full h-auto py-2 pb-5">
        <Container>
          <RateSection />
        </Container>
      </section>

      {/* Featured Properties */}
      {/* <section className="bg-white w-full h-auto mt-32"> */}
      <Container>
        <FeaturedProperties />
      </Container>
      {/* </section> */}

      {/* How It Works */}
      <Container>
        <HowItWorks />
      </Container>

      {/* Map Section */}
      <Container>
        <MapSection />
      </Container>

      {/* Map Section */}
      <Container>
        <TestimonialsSection />
      </Container>

      {/* Agent Section */}
      <Container>
        <AgentsSection />
      </Container>
    </div>
  );
}
