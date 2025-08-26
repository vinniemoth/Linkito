"use client";

import { useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function Card() {
  const [showLink, setShowLink] = useState(false);
  const [link, setLink] = useState("");

  return (
    <div className="w-1/3 bg-white border-cinza-300 border-solid border-1 shadow-lg flex flex-col items-center rounded-lg gap-5 p-5 my-20">
      <h3 className="text-md text-grafite">Paste your link below</h3>
      <input
        className="bg-white border-solid w-2/3 border-cinza-300 border-1 focus:border-turquesa-100 focus:ring-1 focus:ring-turquesa-100 text-grafite placeholder:text-cinza-300 outline-none focus:shadow-[0_0_3px_turquesa-100] focus:shadow-turquesa-100"
        placeholder="Enter your loooong URL here"
        onChange={(e) => setLink(e.target.value)}
        value={link}
        type="url"
      />
      <button
        onClick={() => setShowLink(!showLink)}
        className="bg-turquesa-100 hover:bg-roxo active:bg-roxo-escuro text-2xl p-3 rounded-lg transition duration-200 cursor-pointer"
      >
        Create Linkito
      </button>
      {showLink && (
        <div className="bg-cinza-100 border-solid border-1 border-cinza-200 p-2 flex flex-col items-center">
          <div className="flex justify-between items-center gap-2">
            <p className="text-[#1E3A8A]">linkito.com/linkEncurtado</p>
            <FaCopy
              size={30}
              className="bg-roxo hover:bg-roxo-escuro cursor-pointer p-2 rounded-md"
            ></FaCopy>
          </div>
          <p className="text-cinza-300 text-sm text-center">{link}</p>
        </div>
      )}
      <p className="text-cinza-300 text-sm">Fast, free, and easy to use.</p>
    </div>
  );
}
