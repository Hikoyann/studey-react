import { Inter } from "next/font/google";

import { UserDetail } from "@/src/components/User/UserDetail";
import { SWRConfig } from "swr";
import { API_URL } from "@/src/utils/const";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // ユーザー情報の習得
  const USER_API_URL = `${API_URL}/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();
  // ユーザーの投稿の習得
  const POSTS_API_URL = `${API_URL}/users/${userData.id}/posts`;
  const posts = await fetch(POSTS_API_URL);
  const postData = await posts.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
        [POSTS_API_URL]: postData,
      },
    },
  };
};

const UsersId = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <UserDetail />
    </SWRConfig>
  );
};

export default UsersId;
