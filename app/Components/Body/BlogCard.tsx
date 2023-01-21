import { Icon } from "@iconify/react";
import React from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import BannerImg from "../../assets/img.png";
import Link from "next/link";

interface BlogCardProps {}

export const BlogCard: React.FC<BlogCardProps> = ({}) => {
  return (
    <Link href="/post/123">
      <CardWrapper>
        <div className="cardcontainer">
          <div className="flex gap-2">
            <Icon
              icon="material-symbols:arrow-drop-down-circle-rounded"
              className="text-[24px]"
            />{" "}
            <span className="text-[14px] font-medium">Tom Cooper</span>
          </div>
          <p className="font-bold text-base md:text-[22px] leading-6">
            The new Wikipedia appearance that took the whole village
          </p>
          <p className=" hidden md:block font-medium text-[15px] md:text-[16px] text-[#858484]">
            All the other things we changed in addition to Wikipedia’s look
          </p>
          <div className="flex w-full items-center justify-between">
            <p className="text-[#858484] font-medium text-[13px] ">
              Jan 17 · 5 min read ·
              <span className="hidden md:inline rounded-full bg-[#efeded] text-[#494848] p-2 mx-2">
                Wikipedia
              </span>
            </p>
            <Icon
              icon="material-symbols:bookmark-add-outline"
              className="text-[22px] text-[#7b7b7b]"
            />
          </div>
        </div>
        <Image src={BannerImg} alt="author" className="w-[100px] h-[100px]" />
      </CardWrapper>
    </Link>
  );
};

const CardWrapper = styled.div`
  ${tw`flex gap-2 md:gap-5 w-full md:w-[60%] `}
  .num {
    ${tw`text-[#E6E6E6]  text-[30px] font-bold -mt-3`}
  }
  .cardcontainer {
    ${tw`flex flex-1 flex-col gap-2 `}
  }
`;
