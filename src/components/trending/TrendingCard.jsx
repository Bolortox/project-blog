export const TrendingCard = ({ imgUrl, badge, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        width: "100%",
        height: "320px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "6px",
      }}
      className=" w-[289px] h-[320px] rounded-xl p-6 flex flex-col justify-end gap-3"
    >
      <button className="bg-indigo-500 rounded-md ">{badge}</button>
      <p className="font-sans font-semibold text-white">{title}</p>
    </div>
  );
};
