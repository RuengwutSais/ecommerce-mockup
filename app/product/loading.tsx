"use client"

import { PulseLoader } from "react-spinners";

const Loading = () => {
    return ( 
        <div className="h-full w-full flex justify-center items-center absolute z-40 bg-black opacity-5">
            <PulseLoader color="#2563eb" size={25}/>
        </div>
     );
}
 
export default Loading;