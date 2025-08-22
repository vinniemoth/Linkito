import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#1F2937] p-5 px-10 flex justify-between items-center">
      <div>
        <Link href={"/"}>
          <h1 className="text-turquesa text-2xl">Linkito</h1>
        </Link>
      </div>
      <div className="flex gap-5">
        <button className="cursor-pointer hover:text-turquesa">
          Dashboard
        </button>
        <button className="cursor-pointer hover:text-turquesa">
          Plans & Prices
        </button>
        <button className="cursor-pointer hover:text-turquesa">Help</button>
        <Link href="/auth">
          <button className="cursor-pointer bg-roxo rounded-md p-2 hover:bg-linear-to-l hover:from-roxo hover:to-turquesa transition duration-200 ease-in-out">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}
