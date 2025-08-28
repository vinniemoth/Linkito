"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RedirectionPage() {
  const router = useRouter();
  const params = useParams();
  const [errorCode, setError] = useState("");

  useEffect(() => {
    window.location.href = `/api/redirect/${params.shortId}`;
  }, [params.shortId]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl text-turquesa-200">Redirecting...</h1>
    </div>
  );
}
