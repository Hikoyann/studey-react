import { usePost } from "@/src/hooks/usePost";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CommentsByPostId } from "../Comments/CommentsByPostId";
import { UserByUserId } from "../User/UserByPostId";

const inter = Inter({ subsets: ["latin"] });

export const Post = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        <Head>
          <title>{data?.title}</title>
        </Head>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <UserByUserId id={data.userId} />
        <CommentsByPostId id={data.id} />
      </div>
    </>
  );
};

export default Post;
