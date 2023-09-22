import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/postsaa");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗");
      }
      const json = await res.json();
      // setPosts(json);
      setState((prevState) => {
        return {
          ...prevState,
          data: json,
          loading: false,
        };
      });
    } catch (error) {
      setState((prevState) => {
        return {
          ...prevState,
          loading: false,
          error,
        };
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");

  if (state.loading) {
    return <div>ローディング中</div>;
  }

  if (state.error) {
    return <div>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <>
      <ol>
        {state.data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </>
  );
};

export default Posts;
