"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../Active/NavLink.jsx";

import Image from "next/image.js";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className=" flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Yantun Khaijan Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="ml-2 text-2xl font-extrabold  text-emerald-400">
            Yantun Khaijan
          </span>
        </Link>

        <div className="hidden md:flex gap-6 items-center bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-2 rounded-full shadow-md">
          <NavLink href="/">Home</NavLink>
          <NavLink prefecth={false} href="/foods">
            Foods
          </NavLink>
          <NavLink prefecth={false} href="/reviews">
            Reviews
          </NavLink>
          <NavLink href="/feedback">Feedback</NavLink>
        </div>

        {/* Right Side */}

        {/* Cart */}

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 flex flex-col gap-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/foods">Foods</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/feedback">Feedback</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navber;
