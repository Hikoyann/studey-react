import { useCommentsByPostId } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <ul className="space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pd-2">
            <Link href={`/comments/${comment.id}`}>
              <div className="block hover:text-blue-500 pb-2">
                {comment.body}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
