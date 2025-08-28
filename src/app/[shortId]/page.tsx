"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RedirectionPage() {
  const router = useRouter();
  const params = useParams();

  const [errorCode, setErrorCode] = useState("");

  useEffect(() => {
    const fetchLink = async () => {
      const response = await fetch(`/api/redirect/${params.shortId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (!json.link) {
        setErrorCode(json.CODE);
        return;
      } else {
        router.push(json.link.originalUrl);
      }
      return json;
    };
    fetchLink();
  }, []);

  return (
    errorCode === "NOT_FOUND" && (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl text-turquesa-200">Link not found</h1>
      </div>
    )
  );
}
