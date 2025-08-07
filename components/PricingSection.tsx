import { plans } from "@/constants/Data";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gray-900 text-white py-20 px-6 md:px-20"
    >
      <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[84px] leading-[1.2] text-center mb-8 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F22801] to-[#FC9000] hover:text-transparent max-w-[90%] lg:w-[900px] mx-auto">
        Pricing Plans
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3 ">
        {plans.map(({ name, price, features, popular }, idx) => (
          <div
            key={idx}
            className={`border rounded-xl p-8 flex flex-col justify-between ${
              popular ? "border-[#FC9000]" : "border-gray-700"
            }`}
          >
            {popular && (
              <span className="inline-block bg-[linear-gradient(to_right,_#F22801,_#FC9000)]  text-black text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-semibold mb-4">{name}</h3>
            <p className="text-4xl font-bold mb-6">{price}</p>

            <ul className="mb-6 space-y-2 text-gray-300">
              {features.map((feat, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#F22801] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto rounded-md py-3 font-semibold text-white transition ${
                popular
                  ? "bg-[linear-gradient(to_right,_#F22801,_#FC9000)] hover:bg-orange-700 cursor-pointer"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
