import { Bath, Bed, MapPin, MoveDiagonal2 } from "lucide-react";
import Image from "next/image";
import realEstate7 from "@/public/assets/real estate7.jpg";
import realEstate3 from "@/public/assets/real estate3.jpg";
import realEstate2 from "@/public/assets/real estate2.jpg";

interface FeaturedPropertiesProps {
  title: string;
  price: string;
  location: string;
  area: number;
  beds: number;
  baths: number;
  image: typeof realEstate7;
}

const FeaturedPropertiesInformation: FeaturedPropertiesProps[] = [
  {
    title: "Modern Living in the Heart of Cairo!",
    price: "120,000",
    location: "Cairo, Egypt",
    area: 1000,
    beds: 2,
    baths: 2,
    image: realEstate7,
  },
  {
    title: "Your Family Oasis Awaits in Amman",
    price: " 175,000",
    location: "Jordan, Amman",
    area: 1200,
    beds: 3,
    baths: 3,
    image: realEstate3,
  },
  {
    title: "Luxury Meets Comfort in Dubai",
    price: " 310,000",
    location: "UAE, Dubai",
    area: 1800,
    beds: 4,
    baths: 3,
    image: realEstate2,
  },
];
export default function FeaturedProperties() {
  return (
    <div className="font-radley">
      <div className="mx-[117px] flex flex-col gap-[51px] justify-center items-center text-center">
        <p className="text-[96px] leading-[80px]">
          Discover Our Top Investment Properties
        </p>
        <p className="text-[40px] leading-[43px]">
          Explore handpicked real estate opportunities with high growth
          potential and strong returns.
        </p>
      </div>
      <div className="mt-[102px]  ">
        <div className="flex gap-[27px] font-plus-jakarta-sans">
          {/* for flex */}
          {FeaturedPropertiesInformation.map((featuredProperty) => (
            <div
              key={featuredProperty.title}
              className="flex flex-col w-[412px] rounded-[8px] shadow-xl"
            >
              <div>
                <Image
                  width={412}
                  height={301}
                  src={featuredProperty.image}
                  alt={`${featuredProperty.location}`}
                  className="rounded-t-[8px]"
                />
              </div>
              <div className="p-5">
                <h1 className="text-2xl truncate">{featuredProperty.title}</h1>
                <div className="my-[16px] gap-1 flex font-plus-jakarta-sans">
                  <MapPin className="w-[17px] h-[21px] text-[#5E5E5E]" />
                  <p className="text-[15px] text-black/60">
                    {featuredProperty.location}
                  </p>
                </div>
                <div className="flex">
                  <div className="flex gap-[7px] font-plus-jakarta-sans">
                    <MoveDiagonal2
                      strokeWidth={1}
                      className="rotate-90 text-[#4A739C]"
                    />
                    <span className=" text-[#4A739C] text-[14px]">
                      {" "}
                      {featuredProperty.area} sq ft
                    </span>
                  </div>
                  <p className="mx-[9px] text-[#4A739C]">|</p>
                  <div className="flex gap-[7px] font-plus-jakarta-sans">
                    <Bed strokeWidth={1} className=" text-[#4A739C]" />
                    <span className=" text-[#4A739C] text-[14px]">
                      {" "}
                      {featuredProperty.beds} beds
                    </span>
                  </div>
                  <p className="mx-[9px] text-[#4A739C]">|</p>
                  <div className="flex gap-[7px] font-plus-jakarta-sans">
                    <Bath strokeWidth={1} className=" text-[#4A739C]" />
                    <span className=" text-[#4A739C] text-[14px]">
                      {" "}
                      {featuredProperty.baths} baths
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center font-plus-jakarta-sans mt-[20px]">
                  <p>
                    Price:{" "}
                    <span className="text-third-color text-2xl font-bold">
                      {featuredProperty.price}
                    </span>
                  </p>
                  <button className="bg-second-color text-[14px] px-[17px] py-[7px] text-center text-white  rounded-[5px]">
                    Invest now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
