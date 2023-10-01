import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { Posts as PostsComponent } from "../../components/Posts";

const inter = Inter({ subsets: ["latin"] });

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </>
  );
};

export default Posts;
