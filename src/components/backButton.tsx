"use client";

import { FaLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Props {
  to: string;
}

export default function BackButton(props: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(props.to)}
      className="cursor-pointer inline-block ring-2 ring-turquesa-100 bg-cinza-200 hover:bg-turquesa-100 p-2 m-3 rounded-lg transition duration-200 hover:text-white text-turquesa-100"
    >
      <FaLeftLong size={30}></FaLeftLong>
    </div>
  );
}
