import useSWRImmutable from "swr/immutable";

export const useFetch = (url) => {
  const { data, error } = useSWRImmutable(url);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
