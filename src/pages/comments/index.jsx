import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { CommentsComponent } from "@/src/components/Comments";

const inter = Inter({ subsets: ["latin"] });

const Comments = () => {
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </>
  );
};

export default Comments;
