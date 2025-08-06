"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HomeBackground() {
  const pathname = usePathname();

  return (
    pathname === "/" && (
      <Image
        src="/assets/hero.jpg"
        className="absolute inset-0 bg-cover bg-center -z-50"
        alt="hero"
        fill
      />
    )
  );
}
