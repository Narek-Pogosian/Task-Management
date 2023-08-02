import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AppLayout from "./layout/AppLayout";
import Project from "./pages/Project/Project";
import Tags from "./pages/Tags";
import CreateTask from "./pages/CreateTask/CreateTask";
import AllTasks from "./pages/AllTasks/AllTasks";
import Today from "./pages/Today/Today";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="today" replace />} />
        <Route path="today" element={<Today />} />
        <Route path="all" element={<AllTasks />} />
        <Route path="project/:projectId" element={<Project />} />
        <Route path="task/create" element={<CreateTask />} />
        <Route path="tags" element={<Tags />} />
      </Route>
      <Route path="*" element={<Navigate to="/today" replace />} />
    </Routes>
  );
};

export default App;
