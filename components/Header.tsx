"use client";
import logo from "@/public/assets/logo.png";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Header() {
  const [openLangMenu, setOpenLangMenu] = useState(false);
  const [openBuyMenu, setOpenByuMenu] = useState(false);
  const [lang, setLang] = useState("Eng");

  return (
    <div className="h-[105px]  flex items-center justify-between">
      <Link href={"/"} className="flex gap-5 ">
        <Image src={logo.src} alt="logo" width={30} height={20} />
        <h1 className="text-2xl font-bold text-white drop-shadow-lg ">
          HomeFinder
        </h1>
      </Link>
      <ul
        id="header-ul"
        className="flex gap-8 text-white text-[16px] bg-[rgba(92,115,138,0.8)] h-10  items-center px-1.5 rounded-[5px] shadow-md cursor-pointer"
      >
        <li className="bg-white rounded-[5px] text-[var(--second-color)] px-3 py-1 font-bold">
          Home
        </li>
        <li>Properties</li>
        <li className="flex items-center gap-1.5 relative">
          <button
            onClick={() => setOpenByuMenu((prev) => !prev)}
            className="flex gap-1 cursor-pointer"
          >
            Buy
            <ChevronDown
              className={`h-5 mt-1 transition-transform duration-500 ${
                openBuyMenu ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`absolute w-32 bg-white  top-9 -left-8 flex flex-col text-(--second-color) text-center transition-all duration-300 rounded-md overflow-hidden  ${
              openBuyMenu
                ? "opacity-100 top-10"
                : "opacity-0 pointer-events-none"
            }`}
            id="buy-menu"
          >
            <Link href={"buy"}>Buy</Link>
            <Link href={"sell"}>Sell</Link>
            <Link href={"rent"}>Rent</Link>
            <Link href={"mortgage"}>Mortgage</Link>
            <Link href={"find-an-agent"}>Find An Agent</Link>
          </ul>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-5 items-center">
        <div
          onClick={() => setOpenLangMenu((prev) => !prev)}
          className="flex gap-2 text-sm text-white items-center relative cursor-pointer"
        >
          <Globe />
          <div className="font-bold w-4 pr-5">{lang}</div>
          <ChevronDown
            className={`h-5 mt-1 transition-transform duration-500 ${
              openLangMenu ? "rotate-180" : ""
            }`}
          />
          <ul
            className={`absolute w-24 bg-white  top-9 flex flex-col text-(--second-color) text-center transition-all duration-300 rounded-md overflow-hidden ${
              openLangMenu
                ? "opacity-100 top-10"
                : "opacity-0 pointer-events-none"
            }`}
            id="lang-menu"
          >
            <li onClick={() => setLang("EN")}>English</li>
            <li onClick={() => setLang("عربي")}>العربية</li>
          </ul>
        </div>
        <Button variant="default" className="cursor-pointer shadow-lg">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
