import useSWR from "swr";
import { Inter } from "next/font/google";
import { fetcher } from "../Utils/fetcher";

const inter = Inter({ subsets: ["latin"] });

export const usePosts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
