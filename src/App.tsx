import { useState, useEffect } from "react";
import Toggle from "./components/Toggle";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

export default function App() {
  // Use a functional initializer so that localStorage is read only once during initialization.
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [userData, setUserData] = useState(null);

  // Whenever theme changes, ensure it's saved to localStorage.
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Even though our useEffect will catch this, we can also set it here directly:
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-start pt-[144px] px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#141D2F] text-white" : "bg-[#F6F8FF] text-black"
      }`}
    >
      <div className="w-full max-w-[730px] p-6 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">devfinder</h1>
          <Toggle toggleTheme={toggleTheme} theme={theme} />
        </div>
        <SearchBar setUserData={setUserData} theme={theme} />
        {userData && <UserCard user={userData} theme={theme} />}
      </div>
    </div>
  );
}
