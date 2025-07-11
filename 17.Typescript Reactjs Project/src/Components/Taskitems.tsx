import React from 'react'
import {Task} from "../types/Task"

type Props = {
  task: Task;
  onToggle:(id:number) => void;
  onDelete:(id:number) => void;
};

const Taskitems = ({ task, onToggle, onDelete }: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" , color:task.completed ? "gray" : "black" }}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Taskitems