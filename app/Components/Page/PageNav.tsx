import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { LogoSection } from "../Header";
import Image from "next/image";
import Logo from "../../assets/mediumlogo.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { MenuItems } from "./Menu";

interface PageNavProps {}

export const PageNav: React.FC<PageNavProps> = () => {
  return (
    <div className="w-full  border-b-[1px] ">
      <Wrapper>
        <div className="firstDiv">
          <LogoSection>
            <Image src={Logo} alt="medium logo" height={40} width={40} />
          </LogoSection>
          <div className="inputWrapper">
            <div>
              <Icon icon="akar-icons:search" className="text-[#262626fb]" />
            </div>
            <div>
              <input
                placeholder="Search Medium"
                className="container mx-auto p-2 outline-none bg-inherit placeholder:text-[#262626fb]"
                type="type"
              />
            </div>
          </div>
        </div>
        <div className="secondDiv">
          <Link
            href="new-story"
            className="hidden md:flex  items-center justify-center font-normal text-[#5e5d5d] gap-2 hover:text-black mx-6"
          >
            <Icon
              icon={"jam:write-f"}
              className="text-[#5e5d5d] hover:text-black"
            />
            Write
          </Link>
          <button className="rounded-full bg-nativeGreen text-white px-4 py-1">
            Sign up
          </button>
          <button className="rounded-full text-black px-4">Sign in</button>
          <div>
            <button className="flex items-center">
              <MenuItems />
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  ${tw`flex flex-col gap-4 md:gap-0 md:flex-row justify-between w-full md:items-center`}
  .firstDiv {
    ${tw`flex gap-1 justify-between mt-8 md:mt-0`}
    .inputWrapper {
      ${tw`flex items-center gap-1   align-middle outline-none bg-[#FAFAFA] rounded-full h-10 p-[1px] px-2 w-[200px]`}
    }
  }
  .secondDiv {
    ${tw`flex justify-between gap-2 items-center`}
  }
`;

const Avatar = () => {
  return (
    <div className="relative">
      <div className="w-10 h-10 p-1 rounded-2xl bg-[#254916]">
        <Icon icon="icon-park-solid:avatar" />
        {/* <Image
          layout="responsive"
          src={"/images/avatar.png"}
          width={40}
          height={40}
          alt="image avatars"
        /> */}
      </div>
    </div>
  );
};
