import HeroSearch from "./HeroSearch";

export default function HeroSection() {
  return (
    <div className="w-full h-screen">
      <div className="flex gap-[12px] mb-[38px]">
        <button className="p-2.5 bg-white text-[var(--second-color)] rounded-[5px] font-bold items-center justify-center">
          House
        </button>
        <button className="p-2.5 bg-white text-[var(--second-color)] rounded-[5px] font-bold items-center justify-center">
          Apartment
        </button>
        <button className="p-2.5 bg-white text-[var(--second-color)] rounded-[5px] font-bold items-center justify-center">
          Residential
        </button>
      </div>
      <div className="mb-[38px]">
        <p className="text-[96px] text-white font-radley">
          Build Your Future , One Property at a Time
        </p>

        <HeroSearch />
      </div>
    </div>
  );
}
