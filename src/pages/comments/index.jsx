import Head from "next/head";
import { Inter } from "next/font/google";

import { CommentList } from "@/src/components/Comment/CommentList";
import { SWRConfig } from "swr";
import { API_URL } from "@/src/utils/const";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/users/`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <CommentList />
      </SWRConfig>
    </>
  );
};

export default Comments;
