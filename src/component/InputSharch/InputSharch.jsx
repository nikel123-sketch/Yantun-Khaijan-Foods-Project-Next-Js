"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const router = useRouter();
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.sharch.value.trim();

    if (!value) {
      router.push("/foods");
      if (inputRef.current) inputRef.current.value = ""; // clear input
      return;
    }

    router.push(`/foods?search=${encodeURIComponent(value)}`);
    if (inputRef.current) inputRef.current.value = ""; // clear input after submit
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white rounded-full overflow-hidden shadow-md"
    >
      <input
        type="text"
        placeholder="Search food..."
        name="sharch"
        ref={inputRef}
        className="px-4 py-2 w-48 outline-none text-gray-700"
      />

      <button
        type="submit"
        className="bg-emerald-500 text-white px-4 py-2 hover:bg-emerald-600 transition"
      >
        🔍
      </button>
    </form>
  );
};

export default InputSearch;
