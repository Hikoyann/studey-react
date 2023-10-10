import useSWRImmutable from "swr/immutable";
import { API_URL } from "../utils/const";

export const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

// posts
export const usePosts = () => {
  return useFetchArray(`${API_URL}/Posts`);
};

export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

// Users
export const useUsers = () => {
  return useFetchArray(`${API_URL}/Users`);
};

// Comments
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
