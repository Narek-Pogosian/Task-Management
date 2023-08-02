import { Link } from "react-router-dom";
import Signout from "./Signout";
import ToggleTheme from "./ToggleTheme";
import Logo from "./Logo";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileSidebar from "./MobileSidebar";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="fixed inset-0 flex items-center justify-between px-2 border-b md:px-8 h-14">
      <Link
        to="/"
        className="text-xl font-bold"
        aria-label="logo, link to homepage"
      >
        <Logo size="sm" />
      </Link>
      <div className="flex items-start gap-2">
        <Button size="icon" variant="outline" asChild>
          <Link to="/task/create">
            <Plus className="w-5 h-5" />
          </Link>
        </Button>
        <ToggleTheme />
        {isDesktop ? <Signout /> : <MobileSidebar />}
      </div>
    </header>
  );
};

export default Header;
