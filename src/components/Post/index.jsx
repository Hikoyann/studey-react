import { usePost } from "@/src/hooks/usePost";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CommentsByPostId } from "../Comments/CommentsByPostId";
import { UserByUserId } from "../User/UserByPostId";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

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
        <UserByUserId id={data.userId} />
        <h1 className="text-xl font-bold">{data?.title}</h1>
        <p className="text-gray-900">{data?.body}</p>

        <CommentsByPostId id={data.id} />
      </div>
    </>
  );
};

export default Post;
