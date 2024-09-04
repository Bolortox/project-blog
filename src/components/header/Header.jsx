import { HeaderButtons } from "../buttons";
import { SearchIcon } from "../svg/SearchIcon";
import { BurgerIcon } from "../svg/BurgerIcon";
import { HeaderIcon } from "../svg/HeaderIcon";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex w-full h-auto justify-center ">
      <div className="container flex justify-between max-w-[1216px] fixed z-[1] py-[32px] bg-white">
        <div className="">
          <HeaderIcon />
        </div>
        <div className="hidden md:flex md:items-center gap-10 text-slate-600">
          <Link href="/">
            <HeaderButtons text={"Home "} />
          </Link>

          <Link href="/bloglist">
            <HeaderButtons text={"Blog "} />
          </Link>
          <Link href="/contactus">
            <HeaderButtons text={"Contact "} />
          </Link>
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
