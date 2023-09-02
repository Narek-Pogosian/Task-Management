import Logo from "../components/header/Logo";
import { db } from "@/lib/db";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getLocalSession = async () => {
      const { data } = await db.auth.getSession();
      if (data.session) navigate("/");
    };

    getLocalSession();
  }, []);

  return (
    <div className="grid min-h-full place-content-center">
      <div className="flex justify-center mb-8 ">
        <Logo size="lg" />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
