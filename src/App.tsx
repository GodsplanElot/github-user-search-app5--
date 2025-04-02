import { useState } from "react";
import Toggle from "./components/Toggle";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [userData, setUserData] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-start pt-[144px] transition-colors duration-300 ${
        theme === "dark" ? "bg-[#141D2F] text-white" : "bg-[#F6F8FF] text-black"
      }`}
    >
      <div className="w-[730px] p-6 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">devfinder</h1>
          <Toggle toggleTheme={toggleTheme} theme={theme} />
        </div>
        <SearchBar setUserData={setUserData} theme={theme} />
        {userData && <UserCard user={userData} theme={theme} />} 
        {/* Pass theme as a prop to UserCard */}
      </div>
    </div>
  );
}
