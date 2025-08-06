"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

// تعريف نوع الكائن الذي سيحتوي على بيانات النموذج
interface FormData {
  lookingFor: string;
  price: string;
  location: string;
  numberOfRooms: string;
  selectedType: string;
}

export default function SearchForm() {
  const filterItems = ["City", "House", "Apartment", "Residential"];

  // useState مع تحديد نوع البيانات لضمان سلامة الأنواع
  const [formData, setFormData] = useState<FormData>({
    lookingFor: "",
    price: "",
    location: "",
    numberOfRooms: "",
    selectedType: "city",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFilterClick = (type: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      selectedType: type,
    }));
  };

  const isFormValid =
    formData.lookingFor !== "" &&
    formData.price !== "" &&
    formData.location !== "" &&
    formData.numberOfRooms !== "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted with data:", formData);
    }
  };

  return (
    <div className="w-auto inline-block bg-white mt-[38px] rounded-[20px] font-plus-jakarta-sans shadow-lg">
      <div className="mx-[45px] my-[9px] py-[25px]">
        <h1 className="text-[32px] mb-8 font-bold">Find the best place</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-[55px]">
            <div className="flex flex-col relative">
              <label className="font-bold" htmlFor="lookingFor">
                Looking for
              </label>
              <select
                id="lookingFor"
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleInputChange}
                className={`bg-[#EAEAEA] p-2.5 pr-10 w-[257.89px] outline-0 mt-2 rounded-md relative appearance-none
                  ${
                    formData.lookingFor === "" ? "text-gray-700" : "text-black"
                  }`}
              >
                <option value="" disabled hidden>
                  Enter type
                </option>
                <option
                  className="flex items-center outline-0 justify-center text-[#5C738A] bg-white hover:bg-transparent"
                  value="buy"
                >
                  Buy
                </option>
                <option
                  className="flex items-center outline-0 justify-center text-[#5C738A] bg-white"
                  value="rent"
                >
                  Rent
                </option>
              </select>
              <ChevronDown className="absolute top-[44px] right-[10px] text-[#5C738A] " />
            </div>

            <div className="flex flex-col">
              <label className="font-bold" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="bg-[#EAEAEA] pr-4 w-[257.89px] outline-0 border-none p-[10px] mt-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="bg-[#EAEAEA] pr-4 w-[257.89px] outline-0 border-none p-[10px] mt-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold" htmlFor="numberOfRooms">
                Number of rooms
              </label>
              <input
                id="numberOfRooms"
                name="numberOfRooms"
                type="number"
                value={formData.numberOfRooms}
                onChange={handleInputChange}
                placeholder="2 Bedrooms"
                className="bg-[#EAEAEA] pr-4 w-[257.89px] outline-0 border-none p-[10px] mt-2 rounded-md"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-[25px] flex items-center font-plus-jakarta-sans gap-[15px]">
              <input type="hidden" name="type" value={formData.selectedType} />
              <label className="font-bold" htmlFor="filter">
                Filter by:
              </label>
              {filterItems.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => handleFilterClick(item.toLowerCase())}
                  className={`p-2.5 border border-black/40 rounded-[5px] text-[var(--second-color)] w-auto cursor-pointer ${
                    formData.selectedType === item.toLowerCase()
                      ? "bg-[#EAEAEA] text-black border border-[#EAEAEA]"
                      : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`bg-black font-bold text-white px-[14px] py-[12px] rounded-[5px] flex items-center 
                ${!isFormValid ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              Search Properties
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
