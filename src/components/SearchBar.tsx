import { useState } from "react";
import { Search } from "lucide-react"; // Import the search icon

interface SearchBarProps {
  setUserData: (data: any) => void;
  theme: string; // Accept theme as a prop
}

export default function SearchBar({ setUserData, theme }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchUser = async () => {
    if (!query) {
      setError("Please Enter Username"); // Show error if input is empty
      setUserData(null);
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();

      if (data.message === "Not Found") {
        setError("No results"); // Show error if user is not found
        setUserData(null);
      } else {
        setError(null); // Clear error if user is found
        setUserData(data);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Handle Enter key
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      fetchUser();
    }
  };

  return (
    <div
      className={`relative flex items-center p-3 rounded-lg shadow-md w-full transition-colors duration-300 ${
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
        onKeyDown={handleKeyPress} // Add keypress listener
        placeholder={error ? "" : "Search GitHub username..."}
        className="flex-grow px-3 py-2 border-none outline-none bg-transparent caret-[#0079FF]"
      />

      {/* Button & Error Container */}
      <div className="relative flex items-center">
        {error && (
          <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 text-sm text-[#F74646]">
            {error}
          </span>
        )}
        <button
          onClick={fetchUser}
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            theme === "dark"
              ? "bg-blue-700 hover:bg-[#60ABFF] text-white"
              : "bg-blue-500 hover:bg-[#60ABFF] text-white"
          }`}
        >
          Search
        </button>
      </div>
    </div>
  );
}
