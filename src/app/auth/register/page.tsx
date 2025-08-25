"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const notify = (error: boolean, message: string) => {
    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }
    return notify;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    switch (json.CODE) {
      case "MISSING_FIELDS":
        notify(true, "All fields are required");
        break;
      case "EXISTING_EMAIL":
        notify(true, "Email already exists");
        break;
      case "SUCESS":
        notify(false, "User created successfully");
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
        break;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white p-8 rounded shadow-md w-full max-w-md items-center justify-center">
        <form
          className="p-8 w-full max-w-md items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-grafite">
            Create Account
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <label className="block mb-2 text-grafite">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-4 outline-0 focus:ring-2 focus:ring-turquesa text-grafite border-turquesa"
          />

          <label className="block mb-2 text-grafite">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4 outline-0 focus:ring-2 focus:ring-turquesa text-grafite border-turquesa"
          />

          <label className="block mb-2 text-grafite">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-6 outline-0 focus:ring-2 focus:ring-turquesa text-grafite border-turquesa"
          />

          <button
            type="submit"
            className="w-full bg-roxo text-white p-2 rounded hover:bg-roxo-escuro"
          >
            Start
          </button>
        </form>
        <Link href="/auth/login" className="text-roxo hover:text-roxo-escuro">
          Already have an account?
        </Link>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        draggable
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
