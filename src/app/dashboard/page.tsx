"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (status === "authenticated") {
    return (
      <main className="bg-white h-screen text-grafite flex flex-col justify-center">
        <div className="flex justify-around">
          <div
            onClick={() => router.push("/dashboard/create")}
            className="text-turquesa-100 font-bold ring-2 ring-turquesa-100 shadow-lg p-32 rounded-xl hover:bg-turquesa-100 hover:text-white cursor-pointer active:bg-turquesa-200 active:ring-turquesa-200"
          >
            Create Short Link
          </div>
          <div
            onClick={() => router.push("dashboard/links")}
            className="text-roxo font-bold ring-2 ring-roxo shadow-lg p-32 rounded-xl hover:bg-roxo hover:text-white cursor-pointer active:bg-roxo-escuro active:ring-roxo-escuro"
          >
            See Links Created
          </div>
        </div>
      </main>
    );
  }

  return;
}
