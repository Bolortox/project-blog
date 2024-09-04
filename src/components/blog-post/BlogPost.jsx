import { BlogPostCard } from "./BlogPostCard";

export const BlogPost = ({ articles }) => {
  // articles = [];

  return (
    <div className="w-full flex justify-center flex-col pt-[100px]">
      <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
        All Blog Post
      </p>
      <div className=" flex justify-between pt-8 font-sans not-italic font-bold text-slate-700">
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
      <div className="container  grid grid-cols-3 flex-col justify-center gap-4 pt-[30px]">
        {articles.map((article) => {
          return (
            
            <BlogPostCard
              imgUrl={article.cover_image}
              tags={article.tag_list}
              paragraph={article.title}
              dates={article.created_at}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center py-5">
        <button className=" w-[123px] h-[48px]  border border-slate-300 rounded-md">
          Load More
        </button>
      </div>
    </div>
  );
};
