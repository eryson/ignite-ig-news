import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../prismicio";
import Head from "next/head";
import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | news</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = getSession({ req });
  const { slug } = params;
  const client = getPrismicClient(req);

  const response = await client.getByUID("ignews-post", String(slug), {});

  try {
    if (!(await session).activeSubscription) {
      return { redirect: { destination: "/", permanent: false } };
    }
  } catch {
    return { redirect: { destination: "/", permanent: false } };
  }

  console.log(response.data.content);

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: { post },
    redirect: 60 * 30,
  };
};
