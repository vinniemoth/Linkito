"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Link from "next/link";

export default function LoginPage() {
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (!result?.ok) {
      switch (result?.error) {
        case "CredentialsSignin":
          setError("Invalid Email or Password.");
          console.log(error);
          notify(true, "Invalid Email or Password.");
          break;
        default:
          setError("Internal Server Error.");
          notify(true, "Internal Server Error.");
      }
    } else {
      notify(false, "User logged in successfully. Redirecting to dashboard...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
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
            className="w-full bg-roxo text-white p-2 rounded hover:bg-roxo-escuro cursor-pointer"
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
