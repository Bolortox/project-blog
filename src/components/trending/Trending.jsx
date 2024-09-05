import { TrendingCard } from "./TrendingCard";
import Links from "next/link";
export const Trending = ({ trendingData = [] }) => {
  return (
    <div className="w-full flex justify-center flex-col pt-[100px]">
      <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
        Trending
      </p>
      <div className="container grid grid-cols-4 flex-col justify-center gap-4 pt-[30px]">
        {trendingData.map((articles, index) => (
          <TrendingCard
            key={index}
            imgUrl={articles?.cover_image}
            badge={articles?.tag_list[0]}
            title={articles?.title}
          />
        ))}
      </div>
    </div>
  );
};
