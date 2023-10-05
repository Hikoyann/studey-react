import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { UserComponent } from "@/src/components/User";

const inter = Inter({ subsets: ["latin"] });

const UsersId = () => {
  return (
    <>
      <Header />
      <UserComponent />
    </>
  );
};

export default UsersId;
