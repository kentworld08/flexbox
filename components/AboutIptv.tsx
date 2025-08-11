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
      <div className="absolute inset-0 bg-black/90 z-0" />

      <div className="relative z-10">
        <h1 className="TITLE">About IPTV Services</h1>

        <div className="font-poppins CUSTOM-GRAY text-base sm:text-[17px] leading-relaxed max-w-4xl mx-auto mt-8 space-y-6 px-4 sm:px-0">
          <p>
            Flexbox appeared at the dawn of IPTV television. Over the years, we
            have evolved to provide you with the best services. We have been
            working since 2005 when IPTV television was just in its infancy. Our
            company was one of the first globally to offer this service. Our
            company guarantees:
          </p>

          <ul className="space-y-2 list-none">
            {features.map((item, index) => (
              <li key={index} className="flex items-center">
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
                  className="mr-2 text-[#f22801]"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <p>
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
