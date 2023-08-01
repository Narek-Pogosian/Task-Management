import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Today = () => {
  return (
    <div>
      <Button asChild>
        <Link to="/task/create">Add task</Link>
      </Button>
    </div>
  );
};

export default Today;
