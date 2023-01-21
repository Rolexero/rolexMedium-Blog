import Image from "next/image";
import React from "react";
import tw, { styled } from "twin.macro";
import media from "../../styles/media";
import { BANNER_HEIGHT } from "../constants/variables";
import { ButtonWrapper } from "./Header";
import BannerImg from "../assets/banner.png";

interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <BannerContainer>
      <div className="container">
        <h1 className="headingTag">Stay Curious.</h1>
        <h3 className="text-[20px] lg:text-[25px] max-w-md">
          Discover stories, thinking, and expertise from writers on any topic.
        </h3>
        <ButtonWrapper>Start Reading</ButtonWrapper>
      </div>
      <div className="hidden md:block">
        <Image src={BannerImg} alt="banner image" height={400} width={900} />
      </div>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  ${tw`flex px-[50px] bg-[#FCC017] items-center border-y-[1px] border-[#000]`}

  .headingTag {
    ${tw`max-w-xl text-[5rem]`}

    ${media.smallDesktop} {
      ${tw`max-w-xl text-[3rem]`}
    }
  }

  .container {
    ${tw` flex gap-4  flex-col `}
  }

  height: ${BANNER_HEIGHT}px;

  ${media.smallDesktop} {
    padding: 0px 20px;
  }
`;
