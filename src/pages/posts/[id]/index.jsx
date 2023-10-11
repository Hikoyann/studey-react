import { Inter } from "next/font/google";

import { PostDetail } from "@/src/components/Post/PostDetail";

const inter = Inter({ subsets: ["latin"] });

const PostsId = () => {
  return (
    <>
      <PostDetail />
    </>
  );
};

export default PostsId;
