import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/src/Utils/fetcher";

const inter = Inter({ subsets: ["latin"] });

const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const UserComponent = () => {
  const { data, error, isEmpty, isLoading } = useUser();

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>{error.messages}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }
  return (
    <div>
      <h1>{data?.name}</h1>
      <ul>
        <li>{data?.email}</li>
        <li>{data?.username}</li>
        <li>{data?.address.city}</li>
        <li>{data?.phone}</li>
        <li>{data?.website}</li>
        <li>{data?.company.name}</li>
      </ul>
    </div>
  );
};

const UsersId = () => {
  return (
    <>
      <Header />
      <UserComponent />
    </>
  );
};

export default UsersId;
