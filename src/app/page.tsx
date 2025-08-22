import Card from "@/components/card";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex justify-center items-center bg-white">
        <Card></Card>
      </main>
      <section className="flex justify-center items-center flex-col gap-10 bg-cinza-200 h-screen">
        <h3 className="text-roxo">Plans & Pricing</h3>
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col justify-center border-grey-300 border-solid border-1 p-10">
            <h2 className="text-grafite">Free</h2>
            <h2 className="text-turquesa font-bold">$0 / month</h2>
            <div className="flex items-center gap-2">
              <FaCheck className="text-turquesa"></FaCheck>
              <p className="text-cinza-400">Unlimited short links</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-turquesa"></FaCheck>
              <p className="text-cinza-400">Basic analytics</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-turquesa"></FaCheck>
              <p className="text-cinza-400">QR codes</p>
            </div>
            <div className="flex items-center gap-2">
              <FaX className="text-cinza-400"></FaX>
              <p className="text-cinza-400">Custom short links</p>
            </div>
            <div className="flex items-center gap-2">
              <FaX className="text-cinza-400"></FaX>
              <p className="text-cinza-400">Advanced analytics</p>
            </div>
            <div className="flex items-center gap-2">
              <FaX className="text-cinza-400"></FaX>
              <p className="text-cinza-400">Priority support</p>
            </div>
            <button className="mt-10 bg-turquesa hover:bg-roxo text-2xl p-3 rounded-lg transition duration-200 cursor-pointer">
              Start Now
            </button>
          </div>
          <div className="flex flex-col justify-center border-grey-300 border-solid border-1 p-10">
            <h2 className="text-grafite">Premium</h2>
            <h2 className="text-roxo font-bold">$9 / month</h2>
            <div className="flex items-center gap-2">
              <FaCheck className="text-roxo"></FaCheck>
              <p className="text-cinza-400">Unlimited short links</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-roxo"></FaCheck>
              <p className="text-cinza-400">Basic analytics</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-roxo"></FaCheck>
              <p className="text-cinza-400">QR codes</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-roxo"></FaCheck>
              <p className="text-cinza-400">Custom short links</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-roxo"></FaCheck>
              <p className="text-cinza-400">Advanced analytics</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-roxo"></FaCheck>
              <p className="text-cinza-400">Priority support</p>
            </div>
            <button className="mt-10 bg-roxo hover:bg-turquesa text-2xl p-3 rounded-lg transition duration-200 cursor-pointer">
              Upgrade Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
