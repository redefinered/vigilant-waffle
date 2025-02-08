import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const TaskForm = ({ setTasks }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    axios.post("http://localhost:3000/api/tasks", { name, description })
      .then((response) => {
        setTasks((prev) => [...prev, response.data]);
        setName("");
        setDescription("");
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};
TaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export default TaskForm;
