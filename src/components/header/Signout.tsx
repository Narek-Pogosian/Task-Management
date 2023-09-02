import { db } from "@/lib/db";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

const Signout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSignout = async () => {
    const { error } = await db.auth.signOut();

    if (!error) {
      queryClient.clear();
      navigate("/signin");
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleSignout}>
      <>
        <span className="sr-only">Log out</span>
        <LogOut className="w-5 h-5" />
      </>
    </Button>
  );
};

export default Signout;
