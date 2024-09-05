import FormatDate from "../Utils/FormatDate";
import { BlogPostCard } from "./BlogPostCard";
import Link from "next/link";

export const BlogPost = ({ articles = [] }) => {
  return (
    <div className="w-full flex justify-center flex-col pt-[100px]">
      <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
        All Blog Posts
      </p>
      <div className="flex justify-between pt-8 font-sans not-italic font-bold text-slate-700">
        <div className="flex gap-5">
          <button className="text-orange-200">All</button>
          <button>Design</button>
          <button>Travel</button>
          <button>Fashion</button>
          <button>Technology</button>
          <button>Branding</button>
        </div>
        <div>
          <button>View all</button>
        </div>
      </div>
      <div className="container grid grid-cols-3 flex-col justify-center gap-4 pt-[30px]">
        {articles.map((article, index) => (
          <Link href={`/blog/${article.id}`} key={article.id}>
            <BlogPostCard
              key={index}
              imgUrl={article?.cover_image}
              tags={article?.tag_list}
              paragraph={article?.title}
              dates={article?.published_at}
              // dates={formattedDate}
            />
          </Link>
        ))}
        {/* {articles.map((article, index) => {
          const formattedDate = <FormatDate articles={articles} />;
          <Link href={`/blog/${article.id}`} key={article.id}>
            <BlogPostCard
              key={index}
              imgUrl={article?.cover_image}
              tags={article?.tag_list}
              paragraph={article?.title}
              dates={formattedDate}
            />
          </Link>;
        })} */}
      </div>
      <div className="flex justify-center items-center py-5">
        <button className="w-[123px] h-[48px] border border-slate-300 rounded-md">
          Load More
        </button>
      </div>
    </div>
  );
};
