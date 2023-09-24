import { Inter } from "next/font/google";
import { useCallback, useEffect, useState, useReducer } from "react";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end": {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }

    case "error": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      throw new Error("no such action type!");
    }
  }
};

export const Posts = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts");
  console.log({ data, error });

  // const [state, dispatch] = useReducer(reducer, initialState);

  // const getPosts = useCallback(async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     if (!res.ok) {
  //       throw new Error("エラーが発生したため、データの取得に失敗");
  //     }
  //     const json = await res.json();
  //     dispatch({ type: "end", data: json });
  //   } catch (error) {
  //     dispatch({ type: "error", error });
  //   }
  // }, []);

  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  console.log("foo");

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
