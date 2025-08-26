"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { montserrat } from "@/fonts/fonts";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header
      className={`${montserrat.variable} bg-[#1F2937] p-5 px-10 flex justify-between items-center`}
    >
      <div>
        <Link href={"/"}>
          <h1 className="text-turquesa-100 text-2xl">Linkito</h1>
        </Link>
      </div>
      <div className="flex gap-5">
        <Link
          href="/dashboard"
          className="hover:text-turquesa-100 flex items-center"
        >
          <button className="cursor-pointer">Dashboard</button>
        </Link>
        <button className="cursor-pointer hover:text-turquesa-100">
          Plans & Prices
        </button>
        <button className="cursor-pointer hover:text-turquesa-100">Help</button>
        {!session ? (
          <Link href="/auth/register">
            <button className="cursor-pointer bg-roxo rounded-md p-2 hover:bg-linear-to-l hover:from-roxo hover:to-turquesa-100 transition duration-200 ease-in-out">
              Create Account
            </button>
          </Link>
        ) : (
          <Link href="/">
            <button
              onClick={() => signOut({ redirect: false })}
              className="cursor-pointer bg-roxo rounded-md p-2 hover:bg-linear-to-l hover:from-roxo hover:to-turquesa-100 transition duration-200 ease-in-out"
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
