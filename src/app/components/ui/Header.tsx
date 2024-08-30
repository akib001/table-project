import Image from "next/image";
import bell from "@/../public/images/bell.svg";
import profilePic from "@/../public/images/profilePic.png";
import IconDownArrow from "./IconDownArrow";
import IconSeparator from "./IconSeparator";

export const Header = () => {
  return (
    <header className="bg-white shadow-custom-shadow">
      <div className="mx-auto flex justify-end h-[67px] max-w-screen-xl">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <Image
              width={22}
              height={22}
              src={"/images/question.svg"}
              alt="Qzcy Help"
            />
            <span className="text-textGray text-[14px]">Qzcy Help</span>
            <IconDownArrow />
          </div>
          <IconSeparator />
          <div className="relative">
            <Image width={22} height={22} src={bell} alt="Notification Bell" />
            <div className="absolute top-[-6px] right-0 p-2 bg-danger text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {14}
            </div>
          </div>
          <IconSeparator />
          <div className="flex items-center gap-2">
            <Image
              src={profilePic}
              alt="User Avatar"
              className="rounded-full ring-2 ring-primary ring-offset-1"
            />
            <IconDownArrow />
          </div>
        </div>
      </div>
    </header>
  );
};
