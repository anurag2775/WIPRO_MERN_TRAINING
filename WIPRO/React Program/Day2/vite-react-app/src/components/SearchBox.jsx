// export default function Searchbox() {
//   return (
//     <>
//     <input
//       className="placeholder:text-gray-500 placeholder:italic border p-2 rounded"
//       placeholder="Search for anything..."
//       type="text"
//       name="search"
//     />
//     </>
//   );
// }

import { useState } from "react";

export default function Searchbox() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">

        {/* Search Icon */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        {/* Input */}
        <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search courses, skills, technologies..."
          className="
            w-full 
            pl-10 pr-12 py-3 
            border border-gray-300 
            rounded-full 
            shadow-sm
            focus:outline-none 
            focus:ring-2 
            focus:ring-orange-400 
            focus:border-orange-400
            transition
          "
        />

        {/* Clear Button */}
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            type="button"
          >
            ✖
          </button>
        )}
      </div>

      {/* Helper Text */}
      <p className="text-sm text-gray-500 mt-2 text-center">
        Try searching for React, Java, Python, Cyber Security...
      </p>
    </div>
  );
}
