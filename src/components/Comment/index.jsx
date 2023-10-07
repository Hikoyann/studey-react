import { useComment } from "@/src/hooks/useComment";
import { PostByCommentId } from "../Post/PostByCommentId";

export const CommentComponent = () => {
  const { data, error, isEmpty, isLoading } = useComment();

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>{error.messages}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <div>
      <h1>{data?.body}</h1>
      <ul>
        <li>{data?.name}</li>
        <li>{data?.email}</li>
      </ul>
      <h2>元の記事</h2>
      <PostByCommentId id={data?.postId} />
    </div>
  );
};
