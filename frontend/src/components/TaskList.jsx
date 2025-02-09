import axios from "axios";
import PropTypes from "prop-types";

const TaskItem = ({ task, onComplete, onDelete }) => (
    <div className="task-item">
        
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.name}
            </span>
            <button onClick={() => onDelete(task.id)}>❌</button>
        </div>
        <span style={{ color: "gray", marginLeft: 28 }}>
            {task.description}
        </span>
    </div>
);

  
const TaskList = ({ tasks, setTasks }) => {
    const deleteTask = (id) => {
        axios.delete(`http://localhost:3000/api/tasks/${id}`)
        .then(() => setTasks((prev) => prev.filter((task) => task.id !== id)))
        .catch((error) => console.error("Error deleting task:", error));
    };

    const completeTask = async (taskId) => {
        try {
            const response = await axios.patch(`http://localhost:3000/api/tasks/${taskId}`);
    
            if (response.status === 200) {
                setTasks((prevTasks) =>
                    prevTasks.map((task) =>
                        task.id === taskId ? { ...task, completed: true } : task
                    )
                );
            }
        } catch (error) {
            console.error("Error completing task:", error);
        }
    };
    

    return (
        <ul>
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={deleteTask} onComplete={completeTask} />
        ))}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        })
    ).isRequired,
    setTasks: PropTypes.func.isRequired,
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TaskList;