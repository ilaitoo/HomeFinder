import Container from "@/components/Container";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/assets/hero.jpg"
        className="absolute inset-0 bg-cover bg-center -z-50"
        alt="hero"
        fill
      />

      {/* Solid Color Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-20 -z-40" /> */}

      {/* Content */}
      <Container>
        <div className="mb-52">
          <Header />
        </div>
        <div>
          <Hero />
        </div>
      </Container>
    </div>
  );
}
