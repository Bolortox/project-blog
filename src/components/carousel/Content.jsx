export const Content = () => {
  return (
    <div className="w-full flex justify-center 2xl:px-[352px] 2xl:py-[100px] md:px-24 md:py-[100px] py-[100px] px-[50px]">
      <div className="container  flex justify-center">
        <div className="absolute">
          <img
            src="/blackwomans.jpg"
            alt=""
            className=" 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-80 hidden sm:flex"
          />
          <img
            src="/blackwomanlittle.jpg"
            alt=""
            className=" sm:hidden max-w-80 rounded-lg"
          />
          <div
            className=" p-2 absolute bottom-2 left-2 right-2 sm:absolute sm:bottom-2 sm:left-2 lg:p-10 md:p-5 sm:p-5 bg-white rounded-xl xl:h-[252px] xl:w-[598px] lg:w-[500px] lg:h-[220px] gap-5 flex flex-col
                    sm:h-[170px] sm:w-[390px] w-290px h-155px"
          >
            <div
              className="w-[97px] h-[28px] bg-indigo-500 text-white flex justify-center items-center rounded-md sm:text-xs text-sm  non-italic
                         font-medium  "
            >
              Technology
            </div>
            <div className="lg:text-4xl font-semibold font-sans text-xl ">
              Grid system for better Design User Interface
            </div>
            <div className="text-sm font-sans text-slate-400">
              August 20, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
