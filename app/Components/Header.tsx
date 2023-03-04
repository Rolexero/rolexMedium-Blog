import Link from "next/link";
import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import media from "../../styles/media";
import themes from "../../styles/themes";
import { NAVBAR_HEIGHT } from "../constants/variables";
import Logo from "../assets/medium.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { MobileNavbar } from "./MobileNavbar";

interface HeaderProps {}

const links: { name: string; path: string }[] = [
  {
    name: "Our Story",
    path: "/login",
  },
  {
    name: "Membership",
    path: "/membership",
  },
  {
    name: "Sign in",
    path: "/signin",
  },
];

export const Header: React.FC<HeaderProps> = ({}) => {
  const [open, setIsOpen] = useState(false);

  return (
    <HeaderContainer className="bg-[#FCC017]">
      <LogoSection>
        <Image src={Logo} alt="medium logo" height={40} width={200} />
      </LogoSection>
      <LinksSection>
        <nav>
          {links.map((link) => (
            <Link href={link.path} key={link.name}>
              {link.name}
            </Link>
          ))}
          <ButtonWrapper>Get Started</ButtonWrapper>
        </nav>
      </LinksSection>
      {open && <MobileNavbar open={open} navLink={links} />}

      <MobileNavIcon>
        {open ? (
          <Icon
            icon="material-symbols:close"
            onClick={() => {
              setIsOpen(!open);
            }}
          />
        ) : (
          <Icon
            icon="charm:menu-hamburger"
            onClick={() => {
              setIsOpen(!open);
            }}
          />
        )}
      </MobileNavIcon>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.div`
  ${tw`flex py-0  justify-between items-center md:px-[50px]`}

  height: ${NAVBAR_HEIGHT}px;
  font-family: "Crimson Text", serif;

  ${media.smallDesktop} {
    padding: 0px 20px;
  }
`;

const MobileNavIcon = styled.div`
  ${tw`hidden cursor-pointer  text-[30px]`}
  ${media.tablet} {
    ${tw`block`}
  }
`;

const LinksSection = styled.div`
  nav {
    display: flex;
    font-size: 18px;

    a {
      width: 100px;
      height: 40px;
      text-decoration: none;
      display: inline-block;
      color: #000;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  ${media.tablet} {
    display: none;
  }
`;

export const ButtonWrapper = styled.button`
  ${tw`bg-[#000000] text-white p-2 px-4 w-[140px] text-center  rounded-full cursor-pointer`}
`;

export const LogoSection = styled.div`
  ${tw`cursor-pointer object-contain`}
`;
