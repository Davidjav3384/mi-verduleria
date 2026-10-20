import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-gray-100 h-full text-center flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bolt text-gray-900">Contacto</h1>
       <p className="mt-4 text-gray-500">Hablamos?</p>
       <Link className="mt-2" href="/">Ir a Inicio</Link>
    </div>
  );
}
