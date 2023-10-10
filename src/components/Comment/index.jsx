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
      <div className="text-lg">
        {data?.name} ({data?.email})
      </div>
      <h1 className="text-xl font-bold">{data?.body}</h1>

      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2">
        <PostByCommentId id={data?.postId} />
      </div>
    </div>
  );
};
