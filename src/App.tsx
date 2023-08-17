import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AppLayout from "./layout/AppLayout";
import Project from "./pages/Project/Project";
import Tags from "./pages/Tags";
import AllTasks from "./pages/AllTasks/AllTasks";
import Today from "./pages/Today/Today";
import Expired from "./pages/Expired/Expired";
import Upcoming from "./pages/Upcoming/Upcoming";
import { usePersistStore } from "./lib/store/persistStore";

const App = () => {
  const { isDarkMode } = usePersistStore();

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="today" replace />} />
        <Route path="today" element={<Today />} />
        <Route path="all" element={<AllTasks />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="expired" element={<Expired />} />
        <Route path="tags" element={<Tags />} />
        <Route path="project/:projectId" element={<Project />} />
      </Route>
      <Route path="*" element={<Navigate to="/today" replace />} />
    </Routes>
  );
};

export default App;
