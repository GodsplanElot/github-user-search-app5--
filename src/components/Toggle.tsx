// Toggle.tsx
import { FiSun, FiMoon } from "react-icons/fi";

interface ToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Toggle({ theme, toggleTheme }: ToggleProps) {
  return (
    <button onClick={toggleTheme} className="flex items-center gap-2">
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />} 
      <span className="uppercase text-sm font-semibold">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}