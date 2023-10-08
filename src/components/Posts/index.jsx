import { usePosts } from "@/src/hooks/useFetchArray";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

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
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div className="block group">
                <h1 className="font-bold group-hover:text-blue-500">
                  {post.title}
                </h1>
                <p className="text-sm text-gray-500 group-hover:text-blue-500">
                  {post.body}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
