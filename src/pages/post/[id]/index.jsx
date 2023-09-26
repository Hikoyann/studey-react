import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { useRouter } from "next/router";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました。");
  }

  const json = await response.json();
  return json;
};

const PostId = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );
  console.log({ data, error });

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Header />
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
    </>
  );
};

export default PostId;
