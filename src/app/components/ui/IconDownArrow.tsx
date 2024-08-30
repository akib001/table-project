import Image from "next/image";
import downArrow from "@/../public/images/downArrow.svg";

const IconDownArrow = () => {
  return (
    <Image src={downArrow} className="cursor-pointer" alt="DownArrow Icon" />
  );
};

export default IconDownArrow;
