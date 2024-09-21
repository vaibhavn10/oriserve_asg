import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../API";
import Readme from "./Readme";
import Versions from "./Versions";

function Package() {
  const { pack } = useParams();
  const { activeTab } = useParams();
  const [packData, setPackData] = useState(null);
  const [tab, setTab] = useState(0);

  const fetchDetails = async () => {
    const url = `${API}/${pack}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    if (!jsonData.error) {
      setPackData(jsonData);
    }
  };

  const getTab = (t) => {
    switch (t) {
      case "readme":
        return <Readme packData={packData}/>;
      default:
        return <Versions packData={packData}/>;
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="">
      {!packData ? (
        <div
          className="px-8 pt-2 my-[0.83em] font-[600] w-full text-xl"
          style={{
            fontFamily: "'Source Sans Pro', 'Lucida Grande', sans-serif",
          }}
        >
          Package Not Found.
        </div>
      ) : (
        <div
          className="max-w-[1200px] px-4 mx-auto mt-8 pb-16 flex flex-wrap"
          style={{
            fontFamily: "'Source Sans Pro', 'Lucida Grande', sans-serif",
          }}
        >
          <div className="flex flex-col w-full">
            <div className="max-w-screen w-full text-[1.5rem] font-[600] tracking-[-0.05em] mt-4">
              {pack}
            </div>
            <div
              className="flex mb-2 py-2 font-[0.875rem] text-stone-700"
              style={{ fontFamily: "Fira Mono, monospace" }}
            >
              <span className="">{packData["dist-tags"].latest}</span>
              {packData.versions[packData["dist-tags"].latest].private && (
                <span
                  className={`${
                    packData.versions[packData["dist-tags"].latest].private
                      ? "text-red-700"
                      : "text-green-700"
                  }`}
                >
                  &nbsp;•&nbsp;
                  {packData.versions[packData["dist-tags"].latest].private
                    ? "Private"
                    : "Public"}
                </span>
              )}
              <span className="">&nbsp;•&nbsp;Published 5 years ago</span>
            </div>
          </div>
          <div className="flex w-full">
            <a href={`/package/${pack}/readme`} className={`flex-1 text-center ${activeTab=='readme'?"bg-yellow-500/20":""} hover:bg-yellow-500/20 text-yellow-700 rounded-t-md text-[1rem] font-[600] py-[12px] px-[15px] flex items-center justify-center border-b-2 border-yellow-500 cursor-pointer duration-100`}>
              Readme
            </a>
            <div className={`flex-1 text-center ${activeTab=='code'?"bg-red-500/20 ":""} hover:bg-red-500/20 text-yellow-700 rounded-t-md text-[1rem] font-[600] py-[12px] px-[15px] flex items-center justify-center border-b-2 border-red-500 cursor-pointer duration-100`}>
              Code
            </div>
            <div className={`flex-1 text-center ${activeTab=='dependencies'?"bg-fuchsia-500/20":""} hover:bg-fuchsia-500/20 text-fuchsia-800 rounded-t-md text-[1rem] font-[600] py-[12px] px-[15px] flex items-center justify-center border-b-2 border-fuchsia-500 cursor-pointer duration-100`}>
              17 Dependencies
            </div>
            <div className={`flex-1 text-center ${activeTab=='dependents'?"bg-violet-500/20":""} hover:bg-violet-500/20 text-violet-800 rounded-t-md text-[1rem] font-[600] py-[12px] px-[15px] flex items-center justify-center border-b-2 border-violet-500 cursor-pointer duration-100`}>
              0 Dependents
            </div>
            <a href={`/package/${pack}/versions`} className={`flex-1 text-center ${activeTab=='versions'?"bg-cyan-500/20":""} hover:bg-cyan-500/20 text-cyan-700 rounded-t-md text-[1rem] font-[600] py-[12px] px-[15px] flex items-center justify-center border-b-2 border-cyan-500 cursor-pointer duration-100`}>
              {packData.versions.keys} Versions
            </a>
          </div>
          <div className="flex w-full pt-2">
            {/* Left Section */}
            {getTab(activeTab)}

            {/* Right section */}
            <section className="w-1/3 px-4 mt-4">
              <div className="flex flex-col">
                <h3 className="text-base mt-2 pt-2 text-stone-500/90 font-[600]">
                  Install
                </h3>
                <div
                  className="mb-4 mt-[14px] max-w-[95vw] text-[0.875rem] leading-[24px] border border-stone-300 text-stone-500 rounded-lg py-[10px] pr-[10px] pl-[34px] relative"
                  style={{ fontFamily: "consolas, monaco, monospace" }}
                >
                  <i className="fa-solid fa-angle-right absolute h-[0.9em] w-[0.9em] left-[18px] top-[11px] mr-[3px] mt-[5px]"></i>
                  npm i {pack}
                  <button className="absolute h-[0.9em] w-[0.9em] right-[25px] top-[11px] cursor-pointer scale-[90%]">
                    <i className="fa-regular fa-copy px-2"></i>
                  </button>
                </div>
                <h3 className="text-base mt-2 pt-2 text-stone-500/90 font-[600]">
                  Repository
                </h3>
                <div className="mt-2 pb-4 flex items-center border-b">
                  <i className="fa-brands fa-git-alt w-[18px] mr-[5px]"></i>
                  <a
                    href={
                      packData.versions[packData["dist-tags"].latest].repository
                        .url
                    }
                    className="font-semibold text-[18px]"
                  >
                    {packData.versions[
                      packData["dist-tags"].latest
                    ].repository.url.slice(8, 43)}
                    ...
                  </a>
                </div>
                <div className="flex w-full">
                  <div className="flex-1">
                    <h3 className="text-base mt-2 pt-2 text-stone-500/90 font-[600]">
                      Version
                    </h3>
                    <div className="pb-4 border-b font-semibold text-[20px]">
                      {packData["dist-tags"].latest}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base mt-2 pt-2 text-stone-500/90 font-[600]">
                      License
                    </h3>
                    <div className="pb-4 border-b font-semibold text-[20px]">
                      {packData.license}
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="flex-1">
                    <h3 className="text-base mt-2 pt-2 text-stone-500/90 font-[600]">
                      Unpacked Size
                    </h3>
                    <div className="pb-4 border-b font-semibold text-[20px]">
                      {packData["dist-tags"].latest}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base mt-2 pt-2 text-stone-500/90 font-[600]">
                      Total Files
                    </h3>
                    <div className="pb-4 border-b font-semibold text-[20px]">
                      {packData["dist-tags"].latest}
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="w-full">
                    <h3 className="text-base mt-2 pt-2 text-stone-500/90 font-[600]">
                      Last publish
                    </h3>
                    <div className="pb-4 border-b font-semibold text-[20px]">
                      {packData["dist-tags"].latest}
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="w-full">
                    <h3 className="text-base mt-2 pt-2 text-stone-500/90 font-[600]">
                      Collaborators
                    </h3>
                    <div className="pb-4 border-b font-semibold text-[20px]">
                      {packData["dist-tags"].latest}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default Package;
