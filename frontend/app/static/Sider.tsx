"use client";

import { GlobalContext } from "@/app/global/GlobalProvider";
import React, { useContext } from "react";
import { IoIosCreate } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";

const Sider = () => {
  const { toggle } = useContext(GlobalContext);
  return (
    <div
      className={`h-[100vh] bg-slate-100 ${
        toggle ? "w-[230px]" : "w-[60px]"
      } transition-all duration-500 ease-in-out border-r-2 border-slate-400`}
    >
      <div className="flex flex-col h-[100%] transition-all duration-500 ease-in-out bg-red-400">
        <div className=" w-full bg-red-300 flex items-center py-1 px-2 mt-4">
          <span className="p-2 h-5 w-5 flex justify-center items-center text-md text-white bg-amber-800 rounded-md font-semibold cursor-pointer">
            R
          </span>
          <span
            className={`ml-2 capitalize whitespace-pre ${
              toggle ? "flex" : "hidden"
            }`}
          >
            all products
          </span>
        </div>
        <div className="mt-8 flex items-center px-2 cursor-pointer">
          <IoIosCreate size={30} color="silver" className="mr-3" />
          <span className={`capitalize ${toggle ? "flex" : "hidden"}`}>
            Create
          </span>
        </div>
        <div className="mt-8 flex items-center px-2 cursor-pointer">
          <FiEdit3 size={30} color="silver" className="mr-3" />
          <span className={` capitalize ${toggle ? "flex" : "hidden"}`}>
            Update
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sider;

// "use client";
// import React, { useContext } from "react";

// const Sider = () => {
//     const { toggle }= useContext(GlobalContext)
//   return (
//     <div className={`h-[100vh] bg-slate-100
//     ${toggle} ?

//     `}>
//       <div>Sider</div>
//     </div>
//   );
// };

// export default Sider;
