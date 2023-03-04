import React from "react";
import BannerImg from "../../../assets/img.png";
import Image from "next/image";

interface TopviewProps {}

export const Topview: React.FC<TopviewProps> = ({}) => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between gap-4">
        <Image
          src={BannerImg}
          alt="author"
          className="w-[50px] h-[50px] rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-sm">Medium Staff</p>
          <div className="flex gap-2 text-[12px]">
            <span>Mar 3 .</span>
            <span>Mar 3 .</span>
            <span>Mar 3 </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
