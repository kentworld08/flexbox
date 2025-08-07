const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-gray-600 bg-white justify-center h-[68px] flex items-center text-center text-[14px] leading-[20px]">
      © {year} | Designed Julius Adebo
    </div>
  );
};

export default Footer;
