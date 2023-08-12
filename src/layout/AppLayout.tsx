import { useEffect } from "react";
import { db } from "@/lib/db";
import { Outlet, useNavigate } from "react-router-dom";
import useMediaQuery from "@/hooks/useMediaQuery";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

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
        <div className="flex-1 px-4 py-6 overflow-y-auto md:px-8 xl:px-20">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
