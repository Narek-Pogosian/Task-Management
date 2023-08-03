import TaskForm from "@/components/forms/TaskForm";

const CreateTask = () => {
  return (
    <div className="max-w-3xl pt-10 lg:mx-auto">
      <h1 className="mb-4 text-xl font-bold">Create a task.</h1>
      <TaskForm />
    </div>
  );
};

export default CreateTask;
