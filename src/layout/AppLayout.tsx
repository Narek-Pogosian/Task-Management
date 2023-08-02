import { useEffect } from "react";
import { db } from "@/lib/db";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import useMediaQuery from "@/hooks/useMediaQuery";

const AppLayout = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const getLocalSession = async () => {
      const { data, error } = await db.auth.getSession();
      if (!data.session || error) navigate("/signin");
    };

    getLocalSession();
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="flex h-screen pt-14">
        {isDesktop && <Sidebar />}
        <div className="flex-1 max-w-3xl px-2 py-6 mx-auto overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
