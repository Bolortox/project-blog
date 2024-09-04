import { Second } from "../bloglisting/Second";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { useEffect, useState } from "react";

export default function BlogListing() {
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
        <Second articles={articles} />
        <Footer />
      </div>
    </div>
  );
}
