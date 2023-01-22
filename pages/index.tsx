import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import tw, { styled } from "twin.macro";
import { Header } from "../app/Components/Header";
import { Banner } from "../app/Components/Banner";
import { Trending } from "../app/Components/Trending";
import { Bodycomponent } from "../app/Components/Body";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RolexMedium - Where good ideas find you</title>
      </Head>
      <Container>
        <Header />
        <Banner />
        <Trending />
        <Bodycomponent />
      </Container>
    </>
  );
};

const Container = styled.div`
  ${tw`p-0 `}
`;

export default Home;
