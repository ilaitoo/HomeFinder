import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function MapSection() {
  return (
    <section className="mt-(--margin-between-sections)">
      <div className="bg-(--map-section-bg) h-[468px] rounded-2xl shadow-sm p-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Map */}
        <Image
          src="/assets/map-image.jpg"
          alt="Map"
          width={700}
          height={400}
          className="rounded-lg"
        />

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-[64px] font-radley font-extralight leading-[72px] mb-4 ">
            Discover <br /> Properties With <br /> The best value
          </h2>
          <p className="text-gray-500 mb-[20px] text-2xl">
            From minimalist interiors to compact solutions, small spaces inspire
            big ideas, proving that you don&apos;t need much room.
          </p>
          <button className="bg-second-color hover:bg-second-color/90 cursor-pointer text-white px-4 py-[6px] text-sm font-plus-jakarta-sans font-medium rounded-lg flex items-center gap-2 mx-auto lg:mx-0">
            Find Nearest Properties
            <ChevronRight size={20} className="mt-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
