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
    <div className="w-full flex justify-center ">
      <div className="container grid grid-cols-4 flex-col justify-center gap-4">
        {/* <p className="">Trending</p> */}

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
