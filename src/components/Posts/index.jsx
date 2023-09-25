import { Inter } from "next/font/google";
// import { useCallback, useEffect, useState, useReducer } from "react";
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

export const Posts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log({ data, error });

  if (!error && !data) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <>
      <ol>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </>
  );
};

export default Posts;
