import { ShieldCheck, Tv, UserCheck, Zap } from "lucide-react";

export const heroImages = [
  "/Rectangle.png",
  "/card1.png",
  "/card2.png",
  "/card3.png",
  "/card1.png",
];

export const people = [
  { name: "A", from: "pink-400", to: "red-500" },
  { name: "B", from: "blue-400", to: "purple-500" },
  { name: "C", from: "green-400", to: "teal-500" },
  { name: "D", from: "yellow-400", to: "orange-500" },
  { name: "E", from: "indigo-400", to: "blue-600" },
  { name: "F", from: "rose-400", to: "pink-600" },
];

export const navLinks = [
  { label: "Channels", href: "#channels" },
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

export const movieCards = [
  {
    title: "For Kids",
    channels: "12k Channels",
    description:
      "We have a huge amount of TV content for children. Watch only the best channels with children's cartoons and educational programs.",
    image: "/card1.png",
  },

  {
    title: "TV Shows & Series",
    channels: "16k Channels",
    description:
      "Watch your favorite TV series and shows in the best quality! Whatever TV Show you're a fan of, you'll find it in our packages.",
    image: "/card2.png",
  },
  {
    title: "Fashion",
    channels: "12k Channels",
    description:
      "We have collected the best fashion channels, including Fashion TV and World Fashion Channel. Be aware of the latest news from the world of fashion.",
    image: "/card3.png",
  },
  {
    title: "Fashion",
    channels: "12k Channels",
    description:
      "We have collected the best fashion channels, including Fashion TV and World Fashion Channel. Be aware of the latest news from the world of fashion.",
    image: "/card3.png",
  },
];

export const logo = [
  {
    name: "Netflix",
    url: "/netflix.png",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Disney+",
    url: "/disney.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Warner Bros",
    url: "/national.png",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Universal",
    url: "/sky.png",
    color: "from-blue-600 to-purple-600",
  },
  {
    name: "DSTV",
    url: "/dstv.png",
    color: "from-blue-700 to-blue-800",
  },
  {
    name: "CBC",
    url: "/cbc.png",
    color: "from-gray-700 to-gray-800",
  },
  {
    name: "BEIN SPORT",
    url: "/bein.png",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Amazon Prime",
    url: "/prime.png",
    color: "from-blue-400 to-blue-500",
  },

  {
    name: "BEIN SPORT",
    url: "/bein.png",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Amazon Prime",
    url: "/prime.png",
    color: "from-blue-400 to-blue-500",
  },
];

export const shows = [
  {
    id: 101,
    title: "The Crown",
    image: "/14.webp",
    alt: "The Crown poster",
    release: "November 9",
  },
  {
    id: 102,
    title: "Wednesday",
    image: "/13.webp",
    alt: "Wednesday poster",
    release: "November 23",
  },
  {
    id: 103,
    title: "House of the Dragon",
    image: "/12.webp",
    alt: "House of the Dragon poster",
    release: "August 21",
  },
  {
    id: 104,
    title: "The Lord of the Rings: The Rings of Power",
    image: "/11.webp",
    alt: "The Lord of the Rings: The Rings of Power poster",
  },
];

export const movies = [
  {
    id: 1,
    title: "The Woman King",
    image: "/18.webp",
    alt: "The Woman King poster",
    release: "October 2",
  },
  {
    id: 2,
    title: "Avatar: The Way of Water",
    image: "/17.webp",
    alt: "Avatar: The Way of Water poster",
    release: "December",
  },
  {
    id: 3,
    title: "Devotion",
    image: "/22.webp",
    alt: "Devotion poster",
    release: "November 23",
  },
  {
    id: 4,
    title: "Black Panther: Wakanda Forever",
    image: "/19.webp",
    alt: "Black Panther: Wakanda Forever poster",
    release: "November 11",
  },
  {
    id: 5,
    title: "Puss in Boots: The Last Wish",
    image: "/16.webp",
    alt: "Puss in Boots: The Last Wish poster",
    release: "December 21",
  },
  {
    id: 6,
    title: "Babylon",
    image: "/15.webp",
    alt: "Babylon poster",
    release: "December 23",
  },
];

type FAQItem = {
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    question: "How to connect IP Television?",
    answer:
      "It is very easy to connect IPTV. Contact us on telegram or send a request, conclude a contract, and our employee will configure your profile.",
  },
  {
    question: "I only need specific channels. Is it possible?",
    answer:
      "Yes, you can choose any channels you want and not add unnecessary channels to your package.",
  },
  {
    question: "Do you provide 8K video quality?",
    answer:
      "Yes, we offer the highest video quality possible. By connecting IPTV, you can watch movies and TV series in 8K format.",
  },
  {
    question: "How do I pay for the services?",
    answer:
      "Payment is made according to the chosen tariff plan. You can pay for IPTV in any way convenient for you, please communicate with us in regards to your payment method.",
  },
];

export const plans = [
  {
    name: "Basic",
    price: "$9.99",
    features: ["Access to 50 channels", "Standard Definition", "Basic Support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$19.99",
    features: [
      "Access to 200 channels",
      "HD Streaming",
      "Priority Support",
      "Multi-device",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$29.99",
    features: [
      "Access to 500+ channels",
      "4K UHD Streaming",
      "24/7 Support",
      "Multiple screens",
      "Offline downloads",
    ],
    popular: false,
  },
];

export const features = [
  {
    icon: <Zap className="w-8 h-8 text-[#f22801]" />,
    title: "Fast & Reliable",
    description: "Stream seamlessly with zero buffering.",
    glowColor: "from-orange-500 to-yellow-400",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#F22801]" />,
    title: "Secure & Private",
    description: "Top-notch encryption protects your data.",
    glowColor: "from-red-500 to-pink-500",
  },
  {
    icon: <Tv className="w-8 h-8 text-[#F22801]" />,
    title: "Huge Channel Library",
    description: "Over 100k channels for every taste.",
    glowColor: "from-purple-500 to-indigo-500",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-[#F22801]" />,
    title: "Easy Setup",
    description: "Get started in minutes on any device.",
    glowColor: "from-green-400 to-teal-400",
  },
];
