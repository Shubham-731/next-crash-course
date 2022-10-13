import Head from "next/head";
import Article from "../components/Articles";
import { server } from "../config/index";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Home page | Next crash course</title>
        <meta
          name="description"
          content="This is the home page of this website"
        />
      </Head>

      <Article articles={articles} />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=7"
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
