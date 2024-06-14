import Link from "next/link";
import { Input } from "postcss";
import React from "react";
import { GrSearchAdvanced } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiWaterFlashFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex w-[100%] h-[60px] justify-center border-b border-slate-400 sticky">
      <header className="w-[98%] h-full justify-between flex items-center ">
        <span className="font-medium italic text-xl">Rasheedat</span>
        <div className="border-slate-500 border w-1/3 rounded-xl h-12 justify-between flex items-center px-2">
          <GrSearchAdvanced size={30} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search"
            className="h-full w-[70%] placeholder:text-[18px] focus:outline-none"
          />
          <div className=" flex items-center">
            <span className="border w-9 h-6 p-2 border-[silver] text-center rounded-xl flex justify-center items-center">
              Ctrl
            </span>
            <span>+</span>
            <span className="border w-6 h-6 p-1 border-[silver] text-center rounded-xl flex items-center justify-center">
              K
            </span>
          </div>
        </div>
        <div className="w-[22%] h-12 flex justify-between">
          {/* 1 */}
          <div className="border flex items-center justify-around p-3 h-11 w-20 rounded-2xl">
            <div className="w-9 h-9 rounded-[50%] border-dashed border-purple-500 border-[2px] " />
            <span className="font-bold text-purple-500">0</span>
          </div>
          {/* 2 */}
          <div className="p-2 border justify-center flex items-center rounded-xl">
            <FaRegBell
              size={25}
              className="text-slate-600 animate-pulse cursor-pointer"
            />
          </div>
          {/* 3 */}
          <div className="px-2.5 py-0.5 border-[2.5px]  justify-center flex items-center rounded-xl border-purple-600">
            <MdOutlineDashboardCustomize
              size={25}
              className=" text-purple-600 -rotate-90"
            />
          </div>
          {/* 4 */}
          <div className="border flex items-center  p-3 h-11 w-24 rounded-2xl relative">
            <RiWaterFlashFill size={25} color="purple" />
            <span className="font-bold text-purple-500">10</span>
            <span className="p-2 h-10 w-10 flex justify-center items-center text-xl text-white bg-amber-800 rounded-xl absolute -right-1 ">
              R
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

// import Link from "next/link";
// import React from "react";

// const Header = () => {
//   return (
//     <div>
//       <Link href={"/"}>Home</Link>
//       <Link href={"/about"}>About</Link>
//     </div>
//   );
// };

// export default Header;
