import { useState } from "react";
import { Search } from "lucide-react"; // Import the search icon

interface SearchBarProps {
  setUserData: (data: any) => void;
}

export default function SearchBar({ setUserData }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const fetchUser = async () => {
    if (!query) return;
    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="flex items-center p-3 rounded-lg shadow-md w-full 
        bg-white dark:bg-[#1E2A47] transition-colors duration-300">
      
      {/* Search Icon */}
      <Search className="text-gray-500 dark:text-gray-300 w-5 h-5 mx-2" />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub username..."
        className="flex-grow px-3 py-2 border-none outline-none 
          bg-transparent text-black dark:text-white"
      />
      
      <button
        onClick={fetchUser}
        className="bg-blue-500 text-white px-4 py-2 rounded-md 
          dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 
          transition-colors duration-300"
      >
        Search
      </button>
    </div>
  );
}
