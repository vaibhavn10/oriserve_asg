import React, { useEffect, useRef, useState } from "react";

function Topbar() {
  const [showBorder, setShowBorder] = useState(false);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowBorder(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    window.location.pathname = `/package/${search}/readme`;
  };

  return (
    <div className="flex flex-col border-b" style={{boxShadow: "0 4px 13px -3px rgba(0,0,0,0.10196)"}}>
      <div className="flex items-center px-8 py-4 border-b">
        <div className="pr-4">
          <i className="fa-solid fa-heart w-5 h-5"></i>
        </div>
        <div className="p-[3px] text-[0.875rem] font-[500]">
          <a href="/" className="p-[10px] tracking-[0.15625px]">
            Pro
          </a>
        </div>
        <div className="p-[3px] text-[0.875rem] font-[500]">
          <a href="/" className="p-[10px] tracking-[0.15625px]">
            Teams
          </a>
        </div>
        <div className="p-[3px] text-[0.875rem] font-[500]">
          <a href="/" className="p-[10px] tracking-[0.15625px]">
            Pricing
          </a>
        </div>
        <div className="p-[3px] text-[0.875rem] font-[500]">
          <a href="/" className="p-[10px] tracking-[0.15625px]">
            Documentation
          </a>
        </div>
      </div>
      <div className="flex items-start py-2.5 px-8">
        <div className="flex items-center flex-1">
          <div className="w-[70px] mr-8 mt-1.5">
            <img
              src="https://logowik.com/content/uploads/images/npm-inc7007.logowik.com.webp"
              alt="logo"
              className="h-full w-full object-cover scale-[115%]"
            />
          </div>
          <form
            className="flex flex-1 items-center py-2"
            onSubmit={handleSubmit}
          >
            <div className={`relative flex w-full`}>
              <div
                className={`flex bg-stone-100 w-full p-[5px]`}
                style={{
                  boxShadow: `${
                    showBorder ? "inset 0px 0px 0px 1px rgba(0,0,0,0.8)" : ""
                  }`,
                }}
              >
                <span className="pr-1.5 pl-4 pt-[8px] ">
                  <i className="fa-solid fa-magnifying-glass h-[15px] w-[15px] text-stone-500"></i>
                </span>
                <input
                  type="text"
                  className={`border-none ring-none bg-transparent h-[40px] pl-[10px] text-[16px] placeholder:text-[14px] focus:ring-transparent focus:border-transparent`}
                  style={{
                    width: "calc(100% - 10px)",
                    fontFamily: "Fira Mono, monospace",
                  }}
                  placeholder="Search packages"
                  onClick={() => setShowBorder(true)}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  ref={searchRef}
                />{" "}
              </div>
            </div>
            <button
              className="text-[0.875rem] px-8 py-2 h-[50px] font-bold tracking-[0.3px] bg-zinc-900 text-white cursor-pointer"
              type="submit"
              disabled={search.length == 0}
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center ml-4 pl-4 py-2">
          <a
            href="/"
            className="px-[25px] py-[8.5px] border border-stone-300 text-[0.87rem] mr-4 hover:opacity-[60%] duration-200 cursor-pointer"
          >
            <div className="p-1 font-[500]">Sign Up</div>
          </a>
          <a
            href="/"
            className="text-[0.87rem] mr-4 hover:opacity-[60%] duration-200 cursor-pointer"
          >
            <div className="p-1 font-[500]">Sign In</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
