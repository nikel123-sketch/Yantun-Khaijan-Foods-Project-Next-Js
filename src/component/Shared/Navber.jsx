import Link from "next/link";
import React from "react";
import NavLink from "../Active/NavLink.jsx";

const Navber = () => {
  return (
    <div className="flex justify-between items-center bg-slate-800 font-bold p-2 rounded-xl">
      <div className="text-2xl text-amber-50">
        <Link className="text-emerald-400" href="/">
        Yantun Khaijan
        </Link>
      </div>

      <div className="flex gap-2">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/foods">Foods</NavLink>
        <NavLink href="/reviews">Reviews</NavLink>
        <NavLink href="/feedback">Feedback</NavLink>
      </div>
    </div>
  );
};

export default Navber;
