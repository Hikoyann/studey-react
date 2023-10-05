import useSWR from "swr";
import { fetcher } from "../Utils/fetcher";

export const useComments = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
