import { useFetch } from "@/src/hooks/useFetch";
import { API_URL } from "@/src/utils/const";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const PostTitleByCommentId = (props) => {
  // const { data, error, isLoading } = usePost(props.id);
  const { data, error, isLoading } = useFetch(
    props.id ? `${API_URL}/posts/${props.id}` : null
  );

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

export default PostTitleByCommentId;
