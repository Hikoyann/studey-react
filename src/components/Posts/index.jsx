import { usePosts } from "@/src/hooks/useFetchArray";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  // console.log({ data, error });

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
          return (
            <li key={post.id}>
              {/* {post.id} */}
              <Link href={`/posts/${post.id}`}>
                {post.id}：{post.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Posts;
