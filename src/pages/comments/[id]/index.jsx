import { Header } from "@/src/components/Header";
import { SWRConfig } from "swr";
import { CommentComponent } from "@/src/components/Comment";

export const getStaticPaths = async () => {
  const comments = await fetch(
    "https://jsonplaceholder.typicode.com/comments/"
  );
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comments = await fetch(COMMENTS_API_URL);
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
      <Header />
      <SWRConfig value={{ fallback }}>
        <CommentComponent />
      </SWRConfig>
    </>
  );
};

export default CommentsId;
