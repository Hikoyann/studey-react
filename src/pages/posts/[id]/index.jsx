import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import Post from "@/src/components/Post";

const inter = Inter({ subsets: ["latin"] });

const PostsId = () => {
  return (
    <>
      <Header />
      <Post />
      {/* 名前を変えた時にvercelの名前が変更されるかの確認 */}
    </>
  );
};

export default PostsId;
