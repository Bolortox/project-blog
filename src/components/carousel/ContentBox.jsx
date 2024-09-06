import { LeftIcon } from "../svg/LeftIcon";
import { RightIcon } from "../svg/RightIcon";
export const ContentBox = ({ slides = [], dates, tags, title , articles = [] }}) => {
  export const Content = ({ slides = [], articles = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    return (
      <div>
        <div className=" h-[800px] cover w-full m-auto py-16 relative pt-28 ">
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex]?.cover_image})`,
            }}
            className=" p-3 w-full h-full rounded-2xl bg-center bg-cover duration-500 "
          >
            <div className=" w-[598px] h-[286px] absolute bottom-20  p-10 bg-white rounded-xl flex flex-col gap-6">
              <button className="w-[97px] h-[28px] bg-indigo-500 text-white flex justify-center items-center rounded-md text-xs  non-italicfont-medium hover:shadow-2xl ">
                {tags}
              </button>
              <div className="text-4xl font-semibold font-sans">{title}</div>
              <div className="text-sm font-sans text-slate-400 ">{dates}</div>
            </div>
          </div>
          <div className="flex justify-end gap-[9px] pt-[11px] ">
            <button
              onClick={prevSlide}
              className=" w-10 h-10 rounded-lg border border-black flex justify-center items-center "
            >
              <LeftIcon />
            </button>

            <button
              onClick={nextSlide}
              className=" w-10 h-10 rounded-lg border border-black flex justify-center items-center "
            >
              <RightIcon />
            </button>
          </div>
        </div>
      </div>
    );
  };
};
