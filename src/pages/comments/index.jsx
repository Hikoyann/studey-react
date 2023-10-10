import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { CommentsComponent } from "@/src/components/Comments";
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
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </>
  );
};

export default Comments;
