import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 4,
      text: "I found my dream home through this platform in just a few days! The process was smooth, and the listings were very accurate. Highly recommended!",
      name: "Kenneth Marquardt",
      image: "/assets/Kenneth Marquardt.jpg",
    },
    {
      rating: 4,
      text: "Great customer support and a wide range of properties. I really appreciated how easy it was to filter by price and location. Will definitely use it again.",
      name: "Herman Johnston",
      image: "/assets/Herman Johnston.jpg",
    },
    {
      rating: 5,
      text: "This platform made my house search stress-free. I loved how detailed the property cards were — everything from size to price was clear.",
      name: "Tabitha Veum",
      image: "/assets/Tabitha Veum.jpg",
    },
  ];

  return (
    <section className="mt-(--margin-between-sections) bg-white">
      <div className=" ">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[64px] font-radley font-extralight leading-[72px] w-[600px] mb-14">
            Here Are Few Words From Customers
          </h2>
          <div className="flex gap-3">
            <button className="w-24 h-24 flex items-center justify-center bg-blue-100 rounded-lg cursor-pointer">
              <ArrowLeft className="text-second-color w-12 h-12" />
            </button>
            <button className="w-24 h-24 flex items-center justify-center bg-second-color rounded-lg cursor-pointer">
              <ArrowRight className="text-white  w-12 h-12" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg shadow-sm w-full h-[431px] px-7 py-8 flex flex-col justify-between"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`size-9 ${
                      idx < t.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 fill-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-2xl">{t.text}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={54}
                  height={54}
                  className="rounded-full object-cover"
                />
                <span className="font-extralight text-xl text-gray-900">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
