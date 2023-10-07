import { useUser } from "@/src/hooks/useUser";
import PostsByUserId from "../Posts/PostsByUserId";

export const UserComponent = () => {
  const { data, error, isEmpty, isLoading } = useUser();

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
      <h1>{data?.name}</h1>
      <h2>詳細</h2>
      <ul>
        <li>{data?.email}</li>
        <li>{data?.username}</li>
        <li>{data?.address.city}</li>
        <li>{data?.phone}</li>
        <li>{data?.website}</li>
        <li>{data?.company.name}</li>
      </ul>
      <h2>投稿</h2>
      <PostsByUserId id={data?.id} />
      <h2>コメント</h2>
    </div>
  );
};
