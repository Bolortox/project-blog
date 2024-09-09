import { HeaderButtons } from "../buttons";
import { SearchIcon } from "../svg/SearchIcon";
import { BurgerIcon } from "../svg/BurgerIcon";
import { HeaderIcon } from "../svg/HeaderIcon";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex w-full h-auto justify-center">
      <div className="container flex justify-between max-w-[1216px] fixed z-[1] py-[32px] bg-white">
        <div>
          <Link href="/">
            <HeaderIcon />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center gap-10 text-slate-600 ">
          <Link href="/" className="hover:text-blue-500">
            <HeaderButtons text={"Home "} />
          </Link>

          <Link href="/blog-list" className="hover:text-blue-500">
            <HeaderButtons text={"Blog "} />
          </Link>

          <Link href="/contact-us" className="hover:text-blue-500">
            <HeaderButtons text={"Contact "} />
          </Link>
        </div>
        <div className="hidden md:flex rounded-[5px] px-2 bg-slate-100 ">
          <input
            type="search"
            className=" bg-slate-100  flex justify-center items-center "
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
