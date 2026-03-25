"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const InputSearch = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();

    if (!value) {
      router.push("/foods");
      return;
    }

    router.push(`/foods?search=${encodeURIComponent(value)}`);
    inputRef.current.value = "";
  };

  return (
    <div className="relative flex items-center">
      {/* Search Icon */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-emerald-500 text-white px-3 py-2 rounded-full"
      >
        🔍
      </button>

      {/* Input Field */}
      {open && (
        <form
          onSubmit={handleSearch}
          className="ml-2 flex items-center bg-white rounded-full shadow-md overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search food..."
            ref={inputRef}
            className="px-4 py-2 w-48 outline-none text-gray-700"
          />

          <button
            type="submit"
            className="bg-emerald-500 text-white px-4 py-2 hover:bg-emerald-600"
          >
            Go
          </button>
        </form>
      )}
    </div>
  );
};

export default InputSearch;
