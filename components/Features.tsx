import { features } from "@/constants/Data";

const FeatureSection = () => (
  <section className="lg:px-[80px] px-4 py-16 bg-[#111111]">
    <div className="max-w-6xl mx-auto ">
      <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[84px] leading-[1.2] text-center mb-8 font-medium bg-clip-text text-transparent  bg-gradient-to-r from-[#F22801] to-[#FC9000] hover:text-transparent max-w-[90%] lg:w-[900px] mx-auto">
        Features
      </h2>
      <p className="text-center text-gray-300 font-medium text-[17px]  mx-auto mb-12">
        Enjoy the benefits of Flexbox IPTV:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {features.map(({ icon, title, description, glowColor }, i) => (
          <div
            key={i}
            className="relative group bg-gray-800 rounded-lg p-6 shadow-lg text-center overflow-hidden"
          >
            <div
              className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-40 bg-gradient-to-r ${glowColor} transition-opacity duration-500 pointer-events-none`}
            />

            <div className="relative z-10">
              <div className="mb-4 flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;
