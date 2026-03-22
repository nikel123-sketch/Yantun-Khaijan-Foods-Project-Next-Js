"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname == href;

  return (
    <div>
      <Link
        className={`${isActive ? " bg-teal-300 text-black p-0.5 rounded-xl border-2 border-fuchsia-600  " : "bg-slate-950 text-amber-50 p-0.5 rounded-xl border-2 border-amber-300"}`}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
