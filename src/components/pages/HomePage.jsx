import { BlogPost } from "../blog-post/BlogPost";
import { Content } from "../carousel/Content";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";

export default function HomePage() {
  return (
    <div className="w-full h-full m-auto">
      <div className="container flex flex-col max-w-[1216px] w-auto h-auto m-auto">
        <Header />
        <Content />
        <Trending />
        <BlogPost />
        <div className="bg-slate-100">
          <Footer />
        </div>
      </div>
    </div>
  );
}
