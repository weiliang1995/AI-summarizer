import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 gap-6">
        <div className="flex items-center justify-between gap-2">
          <img src="/icon.png" alt="logo" className="w-12" />
          <p className="text-2xl font-extrabold orange_gradient">
            AI Summarizer
          </p>
        </div>
        <div>
          <button
            type="button"
            className="rounded-xl bg-fuchsia-200 px-4 py-2 text-sm hover:bg-fuchsia-300"
          >
            Sign In
          </button>
        </div>
      </nav>
      <div>
        <h1 className="head_text">
          Summarize Articles with <br className="max-md:hidden" />
          <span className="blue_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
          Tired of reading long articles? Simplify your reading with{" "}
          <span className="orange_gradient font-extrabold">AI Summarizer</span>,
          an open-source article summarizer that transform lengthy articles into
          clear and concise summaries.
        </h2>
      </div>
    </header>
  );
};

export default Hero;
