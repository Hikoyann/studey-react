import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { CommentComponent } from "@/src/components/Comment";

const inter = Inter({ subsets: ["latin"] });

const CommentsId = () => {
  return (
    <>
      <Header />
      <CommentComponent />
    </>
  );
};

export default CommentsId;
