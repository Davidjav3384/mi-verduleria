import NavLink from "@/components/nav-links";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center">
      {/*Titulo*/}
      <div className="bg-gray-100 h-full text-center flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bolt text-gray-900">Home</h1>
        <p className="mt-4 text-gray-500">Este es el Inicio</p>
      </div>
    </main>
  );
}
