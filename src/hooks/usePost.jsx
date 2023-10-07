import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../Utils/fetcher";

export const usePost = (id) => {
  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
