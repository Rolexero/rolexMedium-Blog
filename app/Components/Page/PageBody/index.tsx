import React from "react";
import { Topview } from "./Topview";

interface indexProps {}

export const PageBody: React.FC<indexProps> = ({}) => {
  return (
    <div className="px-[58px] mt-10 md:mt-0 py-[30px] flex flex-col md:flex-row">
      <div className="w-full md:w-[70%] md:border-r-[2px] md:px-4">
        <Topview />
      </div>
      <div>yeah</div>
    </div>
  );
};
