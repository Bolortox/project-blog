import { useEffect, useState } from "react";
import { BlogPost } from "../blog-post/BlogPost";
import { Content } from "../carousel/Content";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full m-auto">
      <div className="container flex flex-col max-w-[1216px] w-auto h-auto m-auto ">
        <Header />
        <Content />
        <Trending />
        <BlogPost articles={articles} />
        <div className="bg-slate-50">
          <Footer />
        </div>
      </div>
    </div>
  );
}
