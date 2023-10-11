import { PostListByUserId } from "../Post/PostListByUserId";
import { useFetch } from "@/src/hooks/useFetch";
import { API_URL } from "@/src/utils/const";
import { useRouter } from "next/router";

export const UserDetail = () => {
  const router = useRouter();
  const { data, error, isEmpty, isLoading } = useFetch(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );

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
      <h1 className="font-bold text-3xl">{data?.name}</h1>
      <h2 className="text-xl font-bold mt-10">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-xl">
        <li>アカウント名：{data?.username}</li>
        <li>メール：{data?.email}</li>
        <li>電話番号：{data?.phone}</li>
        <li>Webサイト{data?.website}</li>
        <li>住所：{data?.address.city}</li>
        <li>勤務先{data?.company.name}</li>
      </ul>
      <h2 className="text-xl font-bold mt-10">投稿</h2>
      <div className="mt-2">
        <PostListByUserId id={data?.id} />
      </div>
    </div>
  );
};
