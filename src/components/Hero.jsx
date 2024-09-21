import React from "react";

function Hero() {
  return (
    <section className="flex items-center hero-bg">
      <div className="max-w-[48rem] mx-auto text-center px-4 py-16 text-white">
        <h1 className="my-[0.67em] text-[5rem] leading-[1.25] font-semibold">
          Build amazing things
        </h1>
        <div className="mx-auto max-w-[32rem] leading-[1.5] text-center">
          <div className="" style={{fontFamily:"Arimo, sans-serif"}}>
            We're GitHub, the company behind the npm Registry and npm CLI. We
            offer those to the community for free, but our day job is building
            and selling useful tools for developers like you.
          </div>
          <h2 className="text-[2.25rem] font-semibold leading-[1.25] my-[0.80em]">
            Take your JavaScript development up a notch
          </h2>
          <div className="" style={{fontFamily:"Arimo, sans-serif"}}>
            Get started today for free, or step up to npm Pro to enjoy a premium
            JavaScript development experience, with features like private
            packages.
          </div>
          <div className="mt-16 flex flex-wrap">
            <div className="w-1/2 pr-4 pb-4">
              <a
                href="/"
                className="text-black rounded-full bg-yellow-500 h-full w-full block mx-auto px-8 py-4 font-[900] leading-[1.5]"
                style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)" }}
              >
                Sign up for free
              </a>
            </div>
            <div className="w-1/2 pl-4 pb-4">
              <a
                href="/"
                className="text-white rounded-full border-2 bg-[#cb3837] h-full w-full block mx-auto px-8 py-4 font-[900] leading-[1.5]"
              >
                Learn about Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
