import { AlignJustify } from "lucide-react";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import Signout from "../../shared/Signout";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <AlignJustify className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <div className="pt-3 pl-6">
          <Signout />
        </div>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
