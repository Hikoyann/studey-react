import { useComments } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <ul className="space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link href={`/comments/${comment.id}`} prefetch={false}>
              <div className="block hover:text-blue-500">{`${comment.body}`}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
