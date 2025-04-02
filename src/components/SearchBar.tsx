import { useState } from "react"; // ✅ Make sure this import exists
import { Search } from "lucide-react"; // Import the search icon

interface SearchBarProps {
    setUserData: (data: any) => void;
    theme: string; // Accept theme as a prop
}

export default function SearchBar({ setUserData, theme }: SearchBarProps) {
    const [query, setQuery] = useState("");
    const [error, setError] = useState<string | null>(null); // Error state to handle "No results"

    const fetchUser = async () => {
        if (!query) return;
        try {
            const res = await fetch(`https://api.github.com/users/${query}`);
            const data = await res.json();

            if (data.message === "Not Found") {
                setError("No results");
                setUserData(null); // Clear previous user data
            } else {
                setError(null); // Clear any previous error
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
                onKeyDown={handleKeyPress} // Add keypress listener
                placeholder="Search GitHub username..."
                className="flex-grow px-3 py-2 border-none outline-none bg-transparent"
            />

            {/* Show No Results Message */}
            {error && (
                <span className="text-sm text-[#F74646] mr-2">
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
    );
}
