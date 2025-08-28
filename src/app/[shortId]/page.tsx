"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectionPage() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetchLink = async () => {
      const response = await fetch(`/api/redirect/${params.shortId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (json.link) {
        router.push(json.link.originalUrl);
      } else {
        console.error("Link not found");
      }
      return json;
    };
    fetchLink();
  }, []);
}
