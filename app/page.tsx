import Container from "@/components/Container";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-50"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      />

      {/* Solid Color Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-20 -z-40" /> */}

      {/* Content */}
      <Container>
        <Header />
      </Container>
    </div>
  );
}
