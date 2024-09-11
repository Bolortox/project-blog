import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { HeaderButtons } from "@/components/buttons";
import { HeaderIcon } from "@/components/svg/HeaderIcon";
import { SearchIcon } from "@/components/svg/SearchIcon";
import { BurgerIcon } from "@/components/svg/BurgerIcon";
export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [articlesForSearch, setArticlesForSearch] = useState();

  const filteredArticles = articlesForSearch?.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log(articlesForSearch);

  const fetchSearchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    fetchSearchData();
  }, []);

  return (
    <div className="flex w-full h-auto justify-center">
      <div className="container flex justify-between max-w-[1216px] fixed z-[1] py-[32px] bg-white">
        <div>
          <Link href="/">
            <HeaderIcon />
          </Link>
        </div>
        {/* Heading icon from the left side ended */}
        <div className="hidden md:flex md:items-center gap-10 text-slate-600 ">
          <Link href="/" className="hover:text-blue-500 ">
            <HeaderButtons text={"Home "} />
          </Link>

          <Link href="/blog-list" className="hover:text-blue-500">
            <HeaderButtons text={"Blog "} />
          </Link>

          <Link href="/contact-us" className="hover:text-blue-500">
            <HeaderButtons text={"Contact "} />
          </Link>
        </div>
        {/* Links are connected to these buttons in the middle to page  */}
        <div className="hidden md:flex flex-col w-[200px] h-[40px]  rounded-[5px] p-2 bg-slate-100 ">
          <div className="flex">
            <input
              type="input"
              className=" bg-slate-100  flex justify-center items-center "
              placeholder="Search"
              onChange={handleInputChange}
            />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className="flex flex-col gap-[10px] ">
            {searchValue &&
              filteredArticles?.map((article) => {
                return (
                  <Link href={`/blog-list/${article?.id}`}>
                    <div
                      className="bg-slate-100 rounded-[10px] p-2"
                      key={article.id}
                    >
                      {article.title}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <button className="md:hidden ">
          <BurgerIcon />
        </button>
      </div>
    </div>
  );
};
