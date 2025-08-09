import { Home, Calendar, ShoppingBag, Leaf, Section } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    { icon: <Home size={32} />, title: "Discover House" },
    { icon: <Calendar size={32} />, title: "Schedule to visit" },
    { icon: <ShoppingBag size={32} />, title: "Hassle-Free Purchase" },
    { icon: <Leaf size={32} />, title: "Buyback Guarantee" },
  ];

  return (
    <section className="mt-(--margin-between-sections)">
      <section className="flex mx-28 items-center gap-14 mb-14">
        <h1 className="text-8xl font-radley font-extralight">
          Popular Property
        </h1>
        <p className="text-[32px] font-plus-jakarta-sans">
          We provide a complete services for the sale, purchase or rental of
          real estate .{" "}
        </p>
      </section>
      <section className="bg-[#0f172a] text-white py-12  font-radley px-[72px]">
        <div className="mx-auto px-4 flex flex-col items-center">
          {/* Title */}
          <div className="mb-16">
            <h2 className="text-8xl font-extralight text-center">
              How It Works
            </h2>
          </div>

          {/* Steps */}
          {/* <div className=" relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-12 justify-between"> */}
          <div className=" relative flex mb-12 justify-between w-[1060px] font-plus-jakarta-sans">
            <div className="absolute w-[90%] h-[1px] bg-amber-400 top-[50px] left-1/2 -translate-1/2"></div>
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center z-10 ">
                <div
                  className={`mb-4   w-[100px] h-[100px] flex items-center justify-center rounded ${
                    i === 0
                      ? "bg-second-color text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {step.icon}
                </div>
                <p className="text-center text-xl">{step.title}</p>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="relative overflow-hidden rounded-xl w-full">
            <Image
              src="/assets/how-it-works-image.jpeg"
              alt="Luxury House"
              className="object-cover h-[332px] w-full rounded-md"
              height={332}
              width={1143}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center bg-black/40">
              <p className="text-8xl font-extralight mb-4 text-white w-[647px]">
                Find the best House with us
              </p>
              <div className="w-[421px] font-plus-jakarta-sans">
                <p className=" mb-4 text-white">
                  We have everything you need from houses, apartments, and
                  villas large and small, with the number of rooms you like and
                  at reasonable prices.
                </p>
                <button className="bg-second-color hover:bg-second-color/90 text-white px-6 py-2 rounded cursor-pointer">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
