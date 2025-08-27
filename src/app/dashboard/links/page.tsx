"use client";

import BackButton from "@/components/backButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Link {
  shortId: string;
  originalUrl: string;
}

export default function Links() {
  const [links, setLinks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    const response = await fetch("/api/links/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setLinks(json.JSON);
    return json;
  };

  return (
    <div>
      <BackButton to="/dashboard" />
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-3xl font-bold">Links Created</h1>
        <div className="grid grid-cols-3 gap-10 py-10">
          {links.map((link: Link) => (
            <div
              key={link.shortId}
              className="flex flex-col ring-2 ring-turquesa-100 p-5 h-50 items-center justify-center gap-5 shadow-lg rounded-lg m-3"
            >
              <p className="text-turquesa-100 text-2xl font-bold">
                http://linkito.com/{link.shortId}
              </p>
              <small>{link.originalUrl}</small>
              <button
                onClick={() => {
                  router.push(`http://linkito.com/${link.shortId}`);
                }}
                className="bg-turquesa-100 hover:bg-roxo active:bg-roxo-escuro text-xl p-3 rounded-lg transition duration-200 cursor-pointer"
              >
                Acessar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
