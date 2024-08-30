import { Content } from "../carousel/Content";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";

export default function HomePage() {
  return (
    <div className="w-full h-full m-auto">
      <div className="container flex flex-col max-w-[1280px] w-auto h-auto m-auto">
        <Header />
        <Content />
        <Trending />
      </div>
    </div>
  );
}
