"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HomeBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return <>{pathname != "/" && children}</>;
}
