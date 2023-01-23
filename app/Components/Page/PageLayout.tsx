import React from "react";
import tw, { styled } from "twin.macro";
import { HeaderContainer, LogoSection } from "../Header";
import { PageNav } from "./PageNav";

interface PageLayoutProps {}

export const PageLayout: React.FC<PageLayoutProps> = ({}) => {
  return (
    <HeaderContainer className="bg-white">
      <PageNav />
    </HeaderContainer>
  );
};

const Container = styled.div`
  ${tw``}
`;
