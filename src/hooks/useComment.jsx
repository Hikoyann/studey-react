import { useRouter } from "next/router";
import { API_URL } from "../utils/const";
import useSWRImmutable from "swr/immutable";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWRImmutable(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
