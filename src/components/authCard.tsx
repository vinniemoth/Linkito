"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function AuthCard() {
  const [authMethod, setAuthMethod] = useState("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    return response;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    router.push("/dashboard");
    return response;
  };

  return (
    <div className="bg-white text-cinza-400 border-2 border-solid border-cinza-200 shadow-lg rounded-lg w-1/2 m-20 p-8 flex flex-col items-center gap-3">
      {/* {authMethod === "register" ? (
        <>
          <h2 className="text-lg">Create Account</h2>
          <form
            onSubmit={(e) => handleRegister(e)}
            className="flex flex-col w-full h-full justify-center items-center gap-3"
          >
            <input
              className="w-2/3 border-1 border-solid border-cinza-400 focus:border-turquesa-100 focus:ring-turquesa-100 focus:ring-2 outline-0"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <input
              className="w-2/3 border-1 border-solid border-cinza-400 focus:border-turquesa-100 focus:ring-turquesa-100 focus:ring-2 outline-0"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <input
              className="w-2/3 border-1 border-solid border-cinza-400 focus:border-turquesa-100 focus:ring-turquesa-100 focus:ring-2 outline-0"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <button className="text-white bg-turquesa-100 hover:bg-roxo active:bg-roxo-escuro p-3 px-10 rounded-md cursor-pointer transition duration-200">
              Start Now!
            </button>
            <button
              className="flex items-center gap-5 cursor-pointer bg-black hover:bg-grafite text-white px-15 py-2 transition duration-200"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              <FaGithub size={25} />
              Sign in with GitHub
            </button>
            <p
              onClick={() => {
                setAuthMethod("login");
              }}
              className="cursor-pointer hover:text-turquesa-100 transition duration-200"
            >
              Already have an account?{" "}
            </p>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-lg">Welcome Back!</h2>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col w-full h-full justify-center items-center gap-3"
          >
            <input
              className="w-2/3 border-1 border-solid border-cinza-400 focus:border-turquesa-100 focus:ring-turquesa-100 focus:ring-2 outline-0"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <input
              className="w-2/3 border-1 border-solid border-cinza-400 focus:border-turquesa-100 focus:ring-turquesa-100 focus:ring-2 outline-0"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <button className="text-white bg-turquesa-100 hover:bg-roxo active:bg-roxo-escuro p-3 px-10 rounded-md cursor-pointer">
              Start Now!
            </button>
            <p
              onClick={() => {
                setAuthMethod("register");
              }}
              className="cursor-pointer hover:text-turquesa-100"
            >
              Don't have an account?{" "}
            </p>
          </form>
        </>
      )} */}
      <button onClick={() => signIn()}>Sign in</button>;
    </div>
  );
}
