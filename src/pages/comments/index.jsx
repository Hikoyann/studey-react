import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import useSWR from "swr";
import { fetcher } from "@/src/Utils/fetcher";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const useUsers = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              {comment.id + "："}
              {`${comment.body}`}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

const Comments = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </>
  );
};

export default Comments;
