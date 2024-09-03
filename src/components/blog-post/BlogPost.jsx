import { BlogPostCard } from "./BlogPostCard";

export const BlogPost = ({ articles }) => {
  const blogpostDatas = [
    {
      button: "Technology",
      paragraph:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      dates: "2024.9.3",
      imgUrl: "/blogPic1.jpg",
    },
    {
      button: "Technology",
      paragraph:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      dates: "2024.9.3",
      imgUrl: "",
    },
    {
      button: "Technology",
      paragraph:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      dates: "2024.9.3",
      imgUrl: "",
    },
    {
      button: "Technology",
      paragraph:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      dates: "2024.9.3",
      imgUrl: "",
    },
    {
      button: "Technology",
      paragraph:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      dates: "2024.9.3",
      imgUrl: "",
    },
    {
      button: "Technology",
      paragraph:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      dates: "2024.9.3",
      imgUrl: "",
    },
    {
      button: "Technology",
      paragraph:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      dates: "2024.9.3",
      imgUrl: "",
    },
  ];

  return (
    <div className="w-full flex justify-center flex-col pt-[100px]">
      <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
        All Blog Post
      </p>
      <div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div className="container  grid grid-cols-3 flex-col justify-center gap-4 pt-[30px]">
        {blogpostDatas.map((data) => {
          return (
            <BlogPostCard
              imgUrl={data.imgUrl}
              button={data.button}
              paragraph={data.paragraph}
              dates={data.dates}
            />
          );
        })}
      </div>
    </div>
  );
};
