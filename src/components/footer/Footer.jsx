import { FacebookIcon } from "../svg/FacebookIcon";
import { FooterIcon } from "../svg/FooterIcon";
import { InstaIcon } from "../svg/InstaIcon";
import { LastIcon } from "../svg/LastIcon";
import { TwitterIcon } from "../svg/TwitterIcon";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full h-auto justify-center pt-[64px]   ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6 w-[30%]">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-sans font-semibold ">About</p>
            <p className=" text-slate-500 font-normal font-sans non-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        {/* first section ended */}
        <div className="text-base flex flex-col gap-2">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        {/* second half ended  */}
        <div className="flex gap-7 w-[30%]">
          <FacebookIcon />
          <TwitterIcon />
          <InstaIcon />
          <LastIcon />
        </div>
      </div>
      {/* top half done  */}
      <div className="flex gap-[609px] py-8">
        <FooterIcon />
        <div className="flex text-slate-600 gap-8">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
