import { Icon } from "@iconify/react";
import React from "react";
import tw, { styled } from "twin.macro";

interface TrendingCardProps {}

export const TrendingCard: React.FC<TrendingCardProps> = ({}) => {
  return (
    <CardWrapper>
      <p className="num">01</p>
      <div className="cardcontainer">
        <div className="flex gap-2">
          <Icon
            icon="material-symbols:arrow-drop-down-circle-rounded"
            className="text-[24px]"
          />{" "}
          <span className="text-[14px] font-medium">Tom Cooper</span>
        </div>
        <p className="text-[12px] md:text-[18px] font-bold">
          Ukraine War, 17 January 2023: Klishchivka
        </p>
        <span className="text-[#858484] font-medium text-[13px]">
          Jan 17 · 5 min read
        </span>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  ${tw`flex gap-2 w-full md:w-[350px]`}
  .num {
    ${tw`text-[#E6E6E6]  text-[30px] font-bold -mt-3`}
  }
  .cardcontainer {
    ${tw`flex flex-col`}
  }
`;
