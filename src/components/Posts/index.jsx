import { usePosts } from "@/src/hooks/usePosts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  console.log({ data, error });

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <>
      <ol>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </>
  );
};

export default Posts;
