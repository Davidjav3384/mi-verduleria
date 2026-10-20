/*
Este componente recibe dos parametros y navega hacia la vista que se le dice 
*/

import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps{
href:string;
children: ReactNode 
}


export default function NavLink({href,children}:NavLinkProps) {
return (
    <Link className="mt-2" href="/contact">Ir a Contactos</Link> 
)
}