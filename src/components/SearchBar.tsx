import { useState } from "react"; // ✅ Make sure this import exists
import { Search } from "lucide-react"; // Import the search icon

interface SearchBarProps {
    setUserData: (data: any) => void;
    theme: string; // Accept theme as a prop
  }
  
  export default function SearchBar({ setUserData, theme }: SearchBarProps) {
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
      <div
        className={`flex items-center p-3 rounded-lg shadow-md w-full transition-colors duration-300 ${
          theme === "dark" ? "bg-[#1E2A47] text-white" : "bg-white text-black"
        }`}
      >
        {/* Search Icon */}
        <Search
          className={`w-5 h-5 mx-2 ${
            theme === "dark" ? "text-gray-300" : "text-gray-500"
          }`}
        />
  
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username..."
          className="flex-grow px-3 py-2 border-none outline-none bg-transparent"
        />
  
        <button
          onClick={fetchUser}
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            theme === "dark"
              ? "bg-blue-700 hover:bg-blue-800 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Search
        </button>
      </div>
    );
  }
  