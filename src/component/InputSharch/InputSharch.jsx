"use client";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.sharch.value.trim();

    if (!value) {
        return router.push('/foods')
    }

    // push to /foods with query param
    router.push(`/foods?search=${encodeURIComponent(value)}`);
    console.log("Search:", value);
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
