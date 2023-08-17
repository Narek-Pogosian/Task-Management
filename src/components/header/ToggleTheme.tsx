import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { usePersistStore } from "@/lib/store/persistStore";

const ToggleTheme = () => {
  const { toggleTheme, isDarkMode } = usePersistStore();

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <span className="sr-only">toggle theme</span>
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
};

export default ToggleTheme;
