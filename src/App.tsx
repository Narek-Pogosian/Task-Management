import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Today from "./pages/Today";
import Login from "./pages/Login";
import AppLayout from "./components/layout/AppLayout";
import Project from "./pages/Project";
import Tags from "./pages/Tags";
import CreateTask from "./pages/CreateTask";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="today" replace />} />
        <Route path="today" element={<Today />} />
        <Route path="project/:projectId" element={<Project />} />
        <Route path="task/create" element={<CreateTask />} />
        <Route path="tags" element={<Tags />} />
      </Route>
      <Route path="*" element={<Navigate to="/today" replace />} />
    </Routes>
  );
};

export default App;
