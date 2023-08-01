import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { usePersistStore } from "@/lib/store/persistStore";
import { useEffect } from "react";

const ToggleTheme = () => {
  const { toggleTheme, isDarkMode } = usePersistStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="toggle theme"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

export default ToggleTheme;
