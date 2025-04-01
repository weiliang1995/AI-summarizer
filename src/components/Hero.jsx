// Hero.js
import { useState } from "react";
import Modal from "./Modal";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 gap-6">
        <div className="flex items-center justify-between gap-2">
          <img src="/icon.png" alt="logo" className="w-12" />
          <p className="text-2xl font-extrabold orange_gradient">
            AI Summarizer
          </p>
        </div>
        <div className="relative flex flex-col gap-4">
          <button
            type="button"
            className="w-fit rounded-xl bg-fuchsia-200 px-4 py-2 text-sm hover:bg-fuchsia-300 shadow-gray-300 shadow-md"
            onClick={() => setModalOpen(true)}
          >
            Buy me a coffee ☺️
          </button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
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
