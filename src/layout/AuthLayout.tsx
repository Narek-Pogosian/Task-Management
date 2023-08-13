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
  }, [navigate]);

  return (
    <div className="flex min-h-full">
      <div className="flex-1 hidden place-content-center lg:grid bg-[#141415] text-slate-50">
        <div className="max-w-md text-center">
          <h1 className="mb-6 text-6xl font-bold leading-[52px] text-balance">
            Task mastery made easy.
          </h1>
          <p className="mb-12 text-lg text-balance text-slate-300">
            An intuitive task management app that boosts productivity,
            streamlines organization, and helps you achieve goals effortlessly.
          </p>
          <div className="flex justify-center">
            <Logo size="lg" />
          </div>
        </div>
      </div>
      <div className="grid flex-1 place-content-center">
        <div className="flex justify-center mb-8 ">
          <Logo size="lg" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
