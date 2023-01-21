import { Icon } from "@iconify/react";
import React from "react";
import tw, { styled } from "twin.macro";
import media from "../../../styles/media";
import { TrendingCard } from "./TrendingCard";

interface indexProps {}

export const Trending: React.FC<indexProps> = ({}) => {
  return (
    <Header>
      <div className="header">
        <Icon icon="fluent:arrow-trending-20-filled" className="text-[18px]" />
        <p className="text-[#000] font-semibold text-[14px] ">
          Trending on RolexMedium
        </p>
      </div>
      <div className="border-b-[1px] border-[#000] w-full">
        <CardContainar>
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </CardContainar>
      </div>
    </Header>
  );
};

const Header = styled.div`
  ${tw`flex flex-col  gap-2  mt-14`}
  .header {
    ${tw`flex gap-4 items-center md:px-[50px]`}
  }

  ${media.smallDesktop} {
    padding: 0px 20px;
  }
`;

const CardContainar = styled.div`
  ${tw`md:px-[50px] mb-6`}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
`;
