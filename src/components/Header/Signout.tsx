import { db } from "@/lib/db";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../ui/loading-button";
import { useQueryClient } from "@tanstack/react-query";

const Signout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSignout = async () => {
    setIsLoading(true);
    const { error } = await db.auth.signOut();

    setIsLoading(false);
    if (!error) {
      queryClient.clear();
      navigate("/signin");
    }
  };

  return (
    <LoadingButton
      isLoading={isLoading}
      loadingText="Signing out.."
      variant="outline"
      size="sm"
      onClick={handleSignout}
      className="font-bold"
    >
      Sign Out
    </LoadingButton>
  );
};

export default Signout;
