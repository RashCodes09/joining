"use client";
import { GlobalContext } from "@/app/global/GlobalProvider";
import React, { FC, PropsWithChildren, useContext } from "react";

interface iProps {
  children: React.ReactNode;
}

const Context: FC<iProps> = ({ children }) => {
  const { toggle } = useContext(GlobalContext);
  return (
    <div>
      <div className="w-full flex justify-end ">
        <div
          className={`${
            toggle ? "w-[calc(100vw-250px)]" : "w-[calc(100vw-80px)]"
          } bg-red-50 h-[150vh]`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Context;

// import {  PropsWithChildren } from "react";
// import { useContext } from "react";

// const Context: FC<PropsWithChildren>({children})=>{
//     const{toggle}= useContext(GlobalContext)
//     return(
//         <div>
//         <div className="w-full flex justify-end">
//         <div className= {`` } >
//         {children}
//         </div>
//         </div>
//         </div>
//     )
// }
