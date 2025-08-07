import React from "react";

const features = [
  "High quality and stability of our IPTV services.",
  "Best-in-class technical support and customer service.",
  "Over 100,000 channels on a wide range of topics.",
  "Flexible tariff plans and diverse package options.",
  "Advanced user security and anti-fraud technology.",
];

const AboutIPTV = () => {
  return (
    <div
      id="about"
      className="relative bg-[url('/aboutbg.jpg')] bg-cover bg-no-repeat py-16 px-4 sm:px-6 lg:px-20"
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10">
        <h1 className="text-[84px] text-center mb-8 font-medium leading-[102px] bg-clip-text text-transparent bg-gradient-to-r from-[#F22801] to-[#FC9000] hover:text-transparent lg:w-[900px] mx-auto">
          About IPTV Services
        </h1>

        <div className="font-poppins text-gray-200 text-base sm:text-[17px] leading-relaxed max-w-4xl mx-auto mt-8 space-y-6 px-2 sm:px-0">
          <p className="pl-8">
            Flexbox appeared at the dawn of IPTV television. Over the years, we
            have evolved to provide you with the best services. We have been
            working since 2005 when IPTV television was just in its infancy. Our
            company was one of the first globally to offer this service. Our
            company guarantees:
          </p>

          <ul className="space-y-2 list-none">
            {features.map((item, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-icon lucide-check text-[#F22801] inline-block mr-2 "
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <p className="pl-8">
            When connecting our IPTV television, you can choose exactly those
            channels that you like the most. More than 1,000,000 clients
            worldwide have chosen us for the impeccable quality of TV
            broadcasting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIPTV;
