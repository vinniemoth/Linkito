"use client";
import BackButton from "@/components/backButton";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { FaCopy } from "react-icons/fa";

export default function Create() {
  const { data: session } = useSession();
  const [link, setLink] = useState("");
  const [alias, setAlias] = useState("");
  const [savedLink, setSavedLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [showLink, setShowLink] = useState(false);

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (session) {
      const email = session.user?.email;
      const response = await fetch("/api/links/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ alias, link, email }),
      });

      const json = await response.json();
      console.log(json);
      {
        setShowLink(true);
        setShortLink(`https://linkito.com/${json.shortId}`);
        setSavedLink(link);
        setLink("");

        return json;
      }
    }
  };

  return (
    <div>
      <BackButton to="/dashboard" />
      <div className="flex flex-col items-center h-screen">
        <div className="flex flex-col w-2/3 h-2/3 justify-center items-center gap-5 shadow-2xl">
          <h3 className="text-2xl text-grafite">Create your Linkito</h3>
          <form
            className="flex flex-col w-1/3 gap-5"
            onSubmit={(e) => handleCreate(e)}
          >
            <input
              onChange={(e) => setAlias(e.target.value)}
              value={alias}
              type="text"
              className="outline-none ring-2 ring-turquesa-100 h-8 rounded-sm"
              placeholder="Enter a name for the link here"
            />
            <input
              onChange={(e) => setLink(e.target.value)}
              value={link}
              type="url"
              className="outline-none ring-2 ring-turquesa-100 h-8 rounded-sm"
              placeholder="Enter your loooong URL here"
            />
            <button className="bg-turquesa-100 hover:bg-roxo active:bg-roxo-escuro text-2xl p-3 rounded-lg transition duration-200 cursor-pointer">
              Create
            </button>
          </form>
          {showLink && (
            <div className="bg-cinza-100 border-solid border-1 border-cinza-200 p-2 flex flex-col items-center">
              <div className="flex justify-between items-center gap-2">
                <p className="text-grafite text-2xl">{shortLink}</p>

                <FaCopy
                  size={30}
                  onClick={() => navigator.clipboard.writeText(shortLink)}
                  className="cursor-pointer text-white bg-turquesa-100 p-2 rounded-md active:bg-turquesa-200"
                />
              </div>
              <small className="text-cinza-300">{savedLink}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
