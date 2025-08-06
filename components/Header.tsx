import logo from "@/public/assets/logo.png";
import { Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Header() {
  return (
    <div className="h-[105px]  flex items-center justify-between">
      <div className="flex gap-5 ">
        <Image src={logo.src} alt="logo" width={30} height={20} />
        <h1 className="text-2xl font-bold text-white drop-shadow-lg ">
          HomeFinder
        </h1>
      </div>
      <ul
        id="header-ul"
        className="flex gap-8 text-white text-[16px] bg-[rgba(92,115,138,0.8)] h-10  items-center px-1.5 rounded-[5px] shadow-md cursor-pointer"
      >
        <li className="bg-white rounded-[5px] text-[var(--second-color)] px-3 py-1 font-bold">
          Home
        </li>
        <li>Properties</li>
        <li className="flex items-center gap-1.5">
          {/* <label htmlFor="buy" className="flex items-center gap-1.5 cursor-pointer">
            <select name="buy" id="buy" className="outline-none appearance-none w-auto bg-transparent">
              <option className="text-[var(--second-color)]" value="buy">
                Buy
              </option>
              <option className="text-[var(--second-color)]" value="sell">
                Sell
              </option>
              <option className="text-[var(--second-color)]" value="rent">
                Rent
              </option>
              <option className="text-[var(--second-color)]" value="mortgage">
                Mortgage
              </option>
              <option className="text-[var(--second-color)]" value="commercial">
                Find an Agent
              </option>
            </select>
            <ChevronDown className="text-xs -mb-1" />
          </label> */}
          <Select defaultValue="buy">
            <SelectTrigger className="w-auto border-0 rounded-none focus:outline-none cursor-pointer">
              <SelectValue placeholder="Buy" className="text-white" />
            </SelectTrigger>

            <SelectContent className="bg-white text-[var(--second-color)] border-0">
              <SelectItem
                className="flex justify-center hover:bg-transparent cursor-pointer text-[var(--second-color)] font-bold"
                value="buy"
              >
                Buy
              </SelectItem>
              <SelectItem
                className="flex justify-center hover:bg-transparent cursor-pointer text-[var(--second-color)] font-bold"
                value="sell"
              >
                Sell
              </SelectItem>
              <SelectItem
                className="flex justify-center hover:bg-transparent cursor-pointer text-[var(--second-color)] font-bold"
                value="rent"
              >
                Rent
              </SelectItem>
              <SelectItem
                className="flex justify-center hover:bg-transparent cursor-pointer text-[var(--second-color)] font-bold"
                value="mortgage"
              >
                Mortgage
              </SelectItem>
              <SelectItem
                className="flex justify-center hover:bg-transparent cursor-pointer text-[var(--second-color)] font-bold"
                value="agent"
              >
                Find an Agent
              </SelectItem>
            </SelectContent>
          </Select>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-5 items-center">
        <div className="flex gap-2 text-sm text-white items-center">
          <Globe className="-mr-3" />
          <Select>
            <SelectTrigger className=" border-0 outline-0 flex items-center">
              <SelectValue className="font-bold " placeholder="Eng" />
            </SelectTrigger>
            <SelectContent className="text-[var(--second-color)] font-bold flex items-center ">
              <SelectItem
                className="text-[var(--second-color)] flex justify-center"
                value="en"
              >
                English
              </SelectItem>
              <SelectItem
                className="text-[var(--second-color)] flex justify-center"
                value="ar"
                defaultValue="ar"
              >
                Arabic
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="default" className="cursor-pointer shadow-lg">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
