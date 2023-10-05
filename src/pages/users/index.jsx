import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import useSWR from "swr";
import { fetcher } from "@/src/Utils/fetcher";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const useUsers = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No users found.</p>;
  }

  return (
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {`${user.name}` + "：" + `(${user.email})`}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </>
  );
};

export default Users;
