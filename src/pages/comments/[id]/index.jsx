import { SWRConfig } from "swr";
import { CommentDetail } from "@/src/components/Comment/CommentDEtail";
import { API_URL } from "@/src/utils/const";

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10/`);
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
  const COMMENTS_API_URL = `${API_URL}/comments/${id}`;
  const comments = await fetch(COMMENTS_API_URL);

  if (!comments.ok) {
    return { notFound: true, revalidate: 1000 };
  }

  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 10,
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <CommentDetail />
      </SWRConfig>
    </>
  );
};

export default CommentsId;
