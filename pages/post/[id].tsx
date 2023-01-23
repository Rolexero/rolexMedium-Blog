import Head from "next/head";
import React from "react";
import { PageLayout } from "../../app/Components/Page/PageLayout";

interface Props {}

const PostComponent: React.FC<Props> = ({}) => {
  return (
    <>
      <Head>
        <title>RolexMedium - Where good ideas find you</title>
      </Head>
      <PageLayout />
    </>
  );
};

export default PostComponent;
