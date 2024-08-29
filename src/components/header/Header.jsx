import { HeaderButtons } from "../buttons"
import { SearchIcon } from "../svg/SearchIcon"
import { BurgerIcon } from "../svg/BurgerIcon"
import { HeaderIcon } from "../svg/HeaderIcon"

export const Header = () => {
    return (
        <div className="flex justify-center w-full p-5 2xl:py-8 2xl:px-[350px] md:px-24 fixed z-[1] ">
            <div className="container flex justify-between">
                <div className="">
                    <HeaderIcon />
                </div>
                <div className="hidden md:flex md:items-center gap-10 text-slate-600">
                    <HeaderButtons text={"Home "} />
                    <HeaderButtons text={"Blog "} />
                    <HeaderButtons text={"Contact "} />
                </div>
                <div className="hidden md:flex ">
                    <input type="search" className=" w-[166px] h-[36px] bg-slate-100 rounded-[5px] flex justify-center items-center gap-" placeholder="Search" />
                    <button><SearchIcon /></button>
                </div>
                <button className="md:hidden ">
                    <BurgerIcon />
                </button>
            </div>
        </div>
    )
} 