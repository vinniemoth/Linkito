"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Email ou senha inválidos");
    } else {
      router.push("/dashboard"); // redireciona após login
    }
  };

  return (
    <div className="flex justify-center p-8 items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className=" w-full max-w-md p-8">
          <h1 className="text-2xl font-bold mb-6 text-center text-grafite ">
            Login
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <label className="block mb-2 text-grafite">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded mb-4 outline-0 focus:ring-2 focus:ring-turquesa text-grafite border-turquesa"
          />

          <label className="block mb-2 text-grafite">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded mb-6 outline-0 focus:ring-2 focus:ring-turquesa text-grafite border-turquesa"
          />

          <button
            type="submit"
            className="w-full bg-roxo text-white p-2 rounded hover:bg-roxo-escuro"
          >
            Login
          </button>
        </form>
        <Link
          href="/auth/register"
          className="text-roxo hover:text-roxo-escuro"
        >
          {" "}
          Doesn't have an account?
        </Link>
      </div>
    </div>
  );
}
