import Head from "next/head";
import { Inter } from "next/font/google";

import PostList from "../../components/Post/PostList";

const inter = Inter({ subsets: ["latin"] });

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>

      <PostList />
    </>
  );
};

export default Posts;
