import React from "react";
import tw, { styled } from "twin.macro";
import { HeaderContainer, LogoSection } from "./Header";
import Image from "next/image";
import Logo from "../assets/mediumlogo.png";

interface PageLayoutProps {}

export const PageLayout: React.FC<PageLayoutProps> = ({}) => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Image src={Logo} alt="medium logo" height={40} width={200} />
      </LogoSection>
    </HeaderContainer>
  );
};

const Container = styled.div`
  ${tw``}
`;
