import React, { useEffect, useState } from "react";

function Versions({ packData }) {
    const [refetch, setRefetch] = useState(false);
    const [versions, setVersions] = useState([]);
  useEffect(() => {
    setVersions(Object.values(packData.versions))
    if (versions) {
      const w = document.getElementById("tagcol").offsetWidth;
      const tagDets = document.querySelectorAll(".tagDet");
    //   console.log(tagDets)
      tagDets.forEach((t) => (t.style.width = w + "px"));
    }
    else{
        setRefetch(!refetch);
    }
  }, [refetch]);

  const VersionRow = ({vData}) => {
    return (
      <div className="flex items-center justify-end w-full mb-[12px] text-stone-800">
        <div className="text-stone-700 underline" style={{fontFamily:"consolas, Arimo, sans-serif"}}>{vData.version}</div>
        <div className="flex-1 border-b border-dotted border-stone-300 mx-2"></div>
        <div className="text-end">9</div>
        <div className={`flex items-center justify-end tagDet`}>
          <div className="w-full border-b border-dotted border-stone-300 mx-2"></div>
          <div className="">latest</div>
        </div>
      </div>
    );
  };
  return (
    <section className="flex-1 pr-4">
      <div className="max-w-[64rem] w-full flex flex-col pt-2 pr-8">
        <div className="mt-2 mb-4 pt-2 pb-4 font-[600] text-[1.25rem] tracking-[-0.03rem] leading-[1.25]">
          Current Tags
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full mb-[12px] font-semibold text-stone-800">
            <div className="">Version</div>
            <div className="flex-1"></div>
            <div className="">Downloads (Last 7 days)</div>
            <div className="flex-1 text-end" id="tagcol">
              Tag
            </div>
          </div>
          <div className="flex items-center justify-end w-full mb-[12px] text-stone-800">
            <div className="">{packData["dist-tags"].latest}</div>
            <div className="flex-1 border-b border-dotted border-stone-300 mx-2"></div>
            <div className="text-end">9</div>
            <div
              className={`flex items-center justify-end tagDet`}
            >
              <div className="w-full border-b border-dotted border-stone-300 mx-2"></div>
              <div className="">latest</div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[64rem] w-full flex flex-col pt-2 pr-8">
        <div className="mt-2 mb-4 pt-2 pb-4 font-[600] text-[1.25rem] tracking-[-0.03rem] leading-[1.25]">
          Version History
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full mb-[12px] font-semibold text-stone-800">
            <div className="">Version</div>
            <div className="flex-1"></div>
            <div className="">Downloads (Last 7 days)</div>
            <div className="flex-1 text-end" id="tagcol">
              Tag
            </div>
          </div>
          {versions && versions.map((v, idx)=>{
            return (
                <VersionRow vData={v} key={idx}/>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Versions;
