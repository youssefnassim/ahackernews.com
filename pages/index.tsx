import type { InferGetStaticPropsType, NextPage } from "next";
import FilterablePostFeed from "components/FilterablePostFeed";
import GreenEmojiFace from "components/GreenEmojiFace";
import { getAllPosts } from "utils/postFetchers";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className="mt-16 mb-32">
      <header className="w-3/5 mx-auto mb-10 flex justify-center">
        <div className="font-['marydale'] font-bold uppercase text-[55px] leading-none tracking-tighter bg-clip-text bg-gradient-to-t from-[#aaa] to-black text-fill-color-transparent">
          Boring <br />
          Stuff—
        </div>
      </header>
      <main className="w-3/5 mx-auto relative">
        <GreenEmojiFace />
        <p className="text-center uppercase hp-uppercase-text font-medium mb-7">
          This website is a work in progress, <br />
          which can stay this way though.
        </p>
        <p className="text-center uppercase hp-uppercase-text font-medium mb-7">
          Find links to recent rants below:
        </p>
        <FilterablePostFeed posts={posts} />
      </main>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts().sort(
    (a, b) =>
      Number(new Date(b.frontMatter.publishedAt)) -
      Number(new Date(a.frontMatter.publishedAt))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Home;
