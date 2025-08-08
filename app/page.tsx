import Container from "@/components/Container";
import FeaturedProperties from "@/components/FeaturedProperties";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RateSection from "@/components/RateSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen">
        <Image
          src="/assets/hero.jpg"
          className="absolute inset-0 bg-cover bg-center -z-50"
          alt="hero"
          fill
        />
        <Container>
          <Header />
          <Hero />
        </Container>
      </div>
      <section className="bg-black w-full h-auto">
        {/* RateSection */}
        <Container>
          <RateSection />
        </Container>
      </section>
      <section className="bg-white w-full h-auto mt-32">
        {/* FeaturedProperties */}
        <Container>
          <FeaturedProperties />
        </Container>
      </section>
    </div>
  );
}
