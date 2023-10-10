import { Header } from "@/src/components/Header";
import { SWRConfig } from "swr";
import { CommentComponent } from "@/src/components/Comment";
import { notFound } from "next/navigation";

export const getStaticPaths = async () => {
  const comments = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=10/"
  );
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comments = await fetch(COMMENTS_API_URL);

  if (!comments.ok) {
    return { notFound: true };
  }

  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentComponent />
      </SWRConfig>
    </>
  );
};

export default CommentsId;
