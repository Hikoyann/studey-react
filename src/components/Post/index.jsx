import { usePost } from "@/src/hooks/usePost";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CommentsByPostId } from "../Comments/CommentsByPostId";

const inter = Inter({ subsets: ["latin"] });

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

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
          <title>{post?.title}</title>
        </Head>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created by{user?.name}</div> : null}
        <CommentsByPostId id={post.id} />
      </div>
    </>
  );
};

export default Post;
