"use client";

import { FaLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div
      onClick={router.back}
      className="cursor-pointer inline-block ring-2 ring-turquesa-100 bg-cinza-200 hover:bg-turquesa-100 p-2 m-3 rounded-lg transition duration-200 hover:text-white text-turquesa-100"
    >
      <FaLeftLong size={30}></FaLeftLong>
    </div>
  );
}
