import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { UsersComponent } from "@/src/components/Users";

const inter = Inter({ subsets: ["latin"] });

const Users = () => {
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
