import React from "react";
import tw, { styled } from "twin.macro";
import { HeaderContainer, LogoSection } from "../Header";
import { PageBody } from "./PageBody";
import { PageNav } from "./PageNav";

interface PageLayoutProps {}

export const PageLayout: React.FC<PageLayoutProps> = ({}) => {
  return (
    <Container>
      <HeaderContainer className="bg-white ">
        <PageNav />
      </HeaderContainer>
      <PageBody />
    </Container>
  );
};

const Container = styled.div`
  ${tw``}
`;
