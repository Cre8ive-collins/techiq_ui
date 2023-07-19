import React from "react";
import { Icon } from "@iconify/react";
import pattern from '../../../assets/pattern.svg'


// bg-[#4f008d]
const Construction = () => {
  return (
    <div className=" patten w-screen h-screen bg-[#4f008d]  flex items-center justify-center relative">
      <img src={pattern} alt="" className="absolute bottom-0 md:-right-32 -right-20 opacity-10 z-10 md:w-[50%]" />
      <div className="w-full md:w-1/2 xl:w-1/3 px-5">
        <Icon
          icon="streamline:interface-alert-warning-triangle-frame-alert-warning-triangle-exclamation-caution"
          className="text-red-500 mx-auto mb-5"
          width="53"
        />
        <h1 className="text-white text-center md:text-3xl xl:text-4xl text-xl  ">
          We’ll be back soon!
        </h1>
        <p className="mt-10 text-center text-white text-sm md:text-lg font-thin">
          Sorry for the inconvenience. We’re performing some maintenance at the
          moment. If you need to you can always follow or message us on
          <a
            target="_"
            href=" https://instagram.com/techiqng?igshid=OGQ5ZDc2ODk2ZA=="
            className="cursor-pointer font-bold"
          >
            &nbsp;Instagram
          </a>{" "}
          for updates, otherwise we’ll be back up shortly!
        </p>
        <p className="mt-5 font- text-white text-center">The TechIQ team</p>
      </div>
    </div>
  );
};

export default Construction;
