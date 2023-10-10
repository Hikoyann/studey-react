import useSWR from "swr";

export const useFetchArray = (url) => {
  const { data, error } = useSWR(url);
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";
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
