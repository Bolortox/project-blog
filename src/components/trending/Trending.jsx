import { TrendingCard } from "./TrendingCard";

export const Trending = () => {
  const trendingDatas = [
    {
      imgUrl: "./Images/blackwomans.jpg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgUrl: "./Images/blackwomanlittle.jpg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgUrl: "./Images/blackwomans.jpg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgUrl: "./Images/blackwomans.jpg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="w-full flex justify-center flex-col pt-[100px]">
      <p className="text-slate-800 text-2xl font-bold non-italic font-sans">
        Trending
      </p>
      <div className="container  grid grid-cols-4 flex-col justify-center gap-4 pt-[30px]">
        {trendingDatas.map((data) => {
          return (
            <TrendingCard
              imgUrl={data.imgUrl}
              badge={data.badge}
              title={data.title}
            />
          );
        })}
      </div>
    </div>
  );
};
