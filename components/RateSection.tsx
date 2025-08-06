interface itemValue {
  value: string;
  Spic: string;
}

export default function RateSection() {
  return (
    <div className="h-[200px] w-full items-center justify-between flex font-plus-jakarta-sans gap-[182px]">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-[64px] font-bold text-white">128K</p>
        <p className="text-[32px] font-bold text-[#4A739C]">Renters</p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <p className="text-[64px] font-bold text-white">300+</p>
        <p className="text-[32px] font-bold text-[#4A739C]">Specialists</p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <p className="text-[64px] font-bold text-white">78%</p>
        <p className="text-[32px] font-bold text-[#4A739C]">Yearly Growth</p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <p className="text-[64px] font-bold text-white">10k</p>
        <p className="text-[32px] font-bold text-[#4A739C]">Properties</p>
      </div>
    </div>
  );
}
