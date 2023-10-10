import { usePost } from "@/src/hooks/usePost";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Link href={`/posts/${data?.id}`}>
        <div className="text-lg hover:text-blue-500">{data?.title}</div>
      </Link>
    </>
  );
};

export default PostByCommentId;
