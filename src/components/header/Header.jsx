import { HeaderButtons } from "../buttons";
import { SearchIcon } from "../svg/SearchIcon";
import { BurgerIcon } from "../svg/BurgerIcon";
import { HeaderIcon } from "../svg/HeaderIcon";

export const Header = () => {
  return (
    <div className="flex w-full h-auto justify-center ">
      <div className="container flex justify-between max-w-[1200px] fixed z-[1] py-[32px]">
        <div className="">
          <HeaderIcon />
        </div>
        <div className="hidden md:flex md:items-center gap-10 text-slate-600">
          <HeaderButtons text={"Home "} />
          <HeaderButtons text={"Blog "} />
          <HeaderButtons text={"Contact "} />
        </div>
        <div className="hidden md:flex ">
          <input
            type="search"
            className=" w-[166px] h-[36px] bg-slate-100 rounded-[5px] flex justify-center items-center gap-"
            placeholder="Search"
          />
          <button>
            <SearchIcon />
          </button>
        </div>
        <button className="md:hidden ">
          <BurgerIcon />
        </button>
      </div>
    </div>
  );
};
