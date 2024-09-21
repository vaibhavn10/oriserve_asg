import React from "react";

function Readme({ packData }) {
  return (
    <section className="flex-1 pr-4">
      <div className="max-w-[64rem] w-full flex flex-col pt-2 pr-8">
        <div className="w-full text-4xl tracking-[-0.8px] leading-[1.2] pb-[7px] border-b font-[600] mb-2">
          consultsolde
        </div>
        <div className="mt-2 mb-4 w-full text-[1.875rem] tracking-[-0.8px] pb-[8px] leading-[1.2] border-b font-[600]">
          Project setup
        </div>
        <div
          className="mb-2 w-full text-base font-thin leading-[24px] py-[13px] px-[15px] bg-stone-100"
          style={{
            fontFamily: "Fira Mono, Consolas, monaco, monospace",
          }}
        >
          npm install
        </div>
        <div className="mt-4 mb-1 font-[600] text-[1.25rem] tracking-[-0.03rem] leading-[1.25]">
          Compiles and hot-reloads for development
        </div>
        <div
          className="mb-2 w-full text-base font-thin leading-[24px] py-[13px] px-[15px] bg-stone-100 text-stone-700"
          style={{
            fontFamily: "Fira Mono, Consolas, monaco, monospace",
          }}
        >
          npm run serve
        </div>
        <div className="mt-4 mb-1 font-[600] text-[1.25rem] tracking-[-0.03rem] leading-[1.25]">
          Compiles and minifies for production
        </div>
        <div
          className="mb-6 w-full text-base font-thin leading-[24px] py-[13px] px-[15px] bg-stone-100 text-stone-700"
          style={{
            fontFamily: "Fira Mono, Consolas, monaco, monospace",
          }}
        >
          npm run build
        </div>
        <div className="mt-4 mb-1 font-[600] text-[1.25rem] tracking-[-0.03rem] leading-[1.25]">
          Lints and fixes
        </div>
        <div
          className="mb-6 w-full text-base font-thin leading-[24px] py-[13px] px-[15px] bg-stone-100 text-stone-700"
          style={{
            fontFamily: "Fira Mono, Consolas, monaco, monospace",
          }}
        >
          npm run lint
        </div>
        <div className="mt-4 mb-1 font-[600] text-[1.25rem] tracking-[-0.03rem] leading-[1.25]">
          Customize configuration
        </div>
        <div className="text-lg tracking-[0.25px]">
          See{" "}
          <span className="font-[600] text-red-600 hover:text-red-700 cursor-pointer">
            Configuration Reference
          </span>
          .
        </div>
        <div className="py-8">
          <div className="mt-2 mb-4 pt-2 pb-4 font-[600] text-[1.25rem] tracking-[-0.03rem] leading-[1.25] border-b border-dotted border-stone-300">
            Keywords
          </div>
          <div className="my-[1em] font-[600] text-[1.25rem] tracking-[-0.03rem] leading-[1.25] flex items-center flex-wrap text-red-600">
            {packData.keywords.map((k, idx) => {
              return (
                <span
                  className="hover:text-red-700 cursor-pointer mr-3"
                  key={idx}
                >
                  {k}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Readme;
