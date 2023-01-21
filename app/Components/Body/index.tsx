import React from "react";
import tw, { styled } from "twin.macro";
import { BlogCard } from "./BlogCard";

interface indexProps {}

export const Bodycomponent: React.FC<indexProps> = ({}) => {
  return (
    <Container>
      <BlogCard />
      <BlogCard />
    </Container>
  );
};

const Container = styled.div`
  ${tw`flex flex-col gap-12 sm:grid-cols-2 lg:grid-cols-3 px-[50px] py-[30px]`}
`;
