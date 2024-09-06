import FormatDate from "../Utils/FormatDate";
import { BlogPostCard } from "./BlogPostCard";
import Link from "next/link";
import React, { useState } from "react";

export const BlogPost = ({ articles = [], filterTag }) => {
  return (
    <div className="w-full flex justify-center flex-col pt-[100px]">
      <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
        All Blog Posts
      </p>
      <div className="flex justify-between ">
        <div className="flex justify-between gap-5 pt-8 font-sans not-italic font-bold text-slate-700">
          <button className="text-orange-300" onClick={() => filterTag("")}>
            All
          </button>
          <button onClick={() => filterTag("database")}>Database</button>
          <button onClick={() => filterTag("javascipt")}>Javascript</button>
          <button onClick={() => filterTag("meta")}>Meta</button>
          <button onClick={() => filterTag("ruby")}>Ruby</button>
        </div>
        <button
          className="font-sans not-italic font-bold text-slate-700"
          onClick={() => filterTag("")}
        >
          View All
        </button>
      </div>
      {/* end of button  */}
      <div className="container grid grid-cols-3 flex-col justify-center gap-4 pt-[30px]">
        {articles.map((article, index) => (
          <Link href={`/blog/${article?.id}`} key={article?.id}>
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
      </div>
      <div className="flex justify-center items-center py-5">
        <button className="w-[123px] h-[48px] border border-slate-300 rounded-md">
          Load More
        </button>
      </div>
    </div>
  );
};
