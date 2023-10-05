import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { useRouter } from "next/router";
import { fetcher } from "@/src/Utils/fetcher";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const CommentComponent = () => {
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
    </div>
  );
};

const CommentsId = () => {
  return (
    <>
      <Header />
      <CommentComponent />
    </>
  );
};

export default CommentsId;
