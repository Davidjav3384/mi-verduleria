/*
Este componente recibe dos parametros y navega hacia la vista que se le dice 
*/

import Link from "next/link";

export default function NavLink() {
  return (
    <div className="p-4 flex justify-center gap-3">
      <Link className="mt-2 rounded-xl bg-red-600 text-white px-4 py-2 text-sm" href="/">
        Ir a inicio
      </Link>
      <Link className="mt-2 rounded-xl bg-red-600 text-white px-4 py-2 text-sm" href="/contact">
        Ir a Contactos
      </Link>
      <Link className="mt-2 rounded-xl bg-red-600 text-white px-4 py-2 text-sm" href="/profile">
        Ir a perfil
      </Link>
    </div>
  );
}
