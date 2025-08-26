"use client";
import BackButton from "@/components/backButton";

export default function Create() {
  return (
    <div>
      <BackButton />
      <div className="flex flex-col items-center h-screen">
        <div className="flex flex-col w-2/3 h-2/3 justify-center items-center gap-5 shadow-2xl">
          <h3 className="text-2xl text-grafite">Create your Linkito</h3>
          <form className="flex flex-col w-1/3 gap-5">
            <input
              type="url"
              className="outline-none ring-2 ring-turquesa-100 h-8 rounded-sm"
              placeholder="Enter your loooong URL here"
            />
            <button className="bg-turquesa-100 hover:bg-roxo active:bg-roxo-escuro text-2xl p-3 rounded-lg transition duration-200 cursor-pointer">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
