import { ShieldCheck, Zap, Tv, UserCheck } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "Fast & Reliable",
    description: "Stream seamlessly with zero buffering.",
    glowColor: "from-orange-500 to-yellow-400",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    title: "Secure & Private",
    description: "Top-notch encryption protects your data.",
    glowColor: "from-red-500 to-pink-500",
  },
  {
    icon: <Tv className="w-8 h-8 text-orange-500" />,
    title: "Huge Channel Library",
    description: "Over 100k channels for every taste.",
    glowColor: "from-purple-500 to-indigo-500",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-orange-500" />,
    title: "Easy Setup",
    description: "Get started in minutes on any device.",
    glowColor: "from-green-400 to-teal-400",
  },
];

const FeatureSection = () => (
  <section className="lg:px-[80px] px-4 py-16 bg-[#111111]">
    <div className="max-w-6xl mx-auto ">
      <h2 className="text-[84px] text-center mb-8 font-medium leading-[102px] bg-clip-text text-transparent bg-gradient-to-r from-[#F22801] to-[#FC9000] hover:text-transparent">
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
