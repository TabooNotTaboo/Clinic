import clsx from "clsx";
import React from "react";

const showCaseItem = ({ item, index }) => {
  console.log(item.img, "item");
  return (
    <div className="pb-32 pt-16 reveal-onshow">
      <div
        className={clsx(
          "md:flex-row flex-col-reverse p-6 flex justify-center gap-8 w-full items-center max-sm ",
          index % 2 == 1 && "md:flex-row-reverse"
        )}
      >
        <div
          className={clsx(
            " bg-[#F3F5FF] rounded-3xl md:w-1/2",
            item.img ? " md:py-16 md:px-10 sm:py-8 sm:px-5 py-4 px-2 " : "p-0"
          )}
        >
          <div className="w-full relative">
            <div
              className={clsx(
                "  w-full flex justify-start",
                item.img && "pb-8"
              )}
            >
              <img
                src={item.bgImg}
                className={clsx(
                  "rounded-3xl  object-cover",
                  item.img ? "w-4/5" : "w-full"
                )}
                alt="bg"
              />
            </div>
            {item.img && (
              <div className="absolute inset-x-0 bottom-0 flex justify-end">
                <img src={item.img} className="w-1/2 rounded-3xl" alt="item" />
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col  items-start">
          <span className="tracking-wide text-sm px-6 py-3 font-bold rounded-3xl mb-6 bg-[#F3F5ff] text-[#4457ff]">
            {item.tag}
          </span>
          <h1 className="text-[40px] text-[#0b0a33] font-bold mb-4">
            {item.title}
          </h1>
          <p className="text-[18px] text-[#7a7d9c] mb-10 leading-[30px] font-medium tracking-wider">
            {item.des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default showCaseItem;
