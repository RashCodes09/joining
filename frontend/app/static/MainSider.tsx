"use client";

import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import Sider from "./Sider";
import { GlobalContext } from "@/app/global/GlobalProvider";

const MainSider = () => {
  const { toggled, setToggled } = useContext(GlobalContext);
  return (
    <div
      className="fixed"
      onMouseEnter={() => {
        setToggled(true);
      }}
      onMouseLeave={() => {
        setToggled(false);
      }}
    >
      {toggled && <ToggleButton />}
      <Sider />
    </div>
  );
};

export default MainSider;

// const MainSider= ()=>{
//     return(
//         <div>
//             <div className="fixed"
//             >

//             </div>
//         </div>
//     )
// }

// export default MainSider
