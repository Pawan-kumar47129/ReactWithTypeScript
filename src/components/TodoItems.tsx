import React, { useState } from "react";
import useTodos from "../store/TodoContext";

type todoProps = {
  todo: {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
  };
};

function TodoItems({ todo }: todoProps) {
  const [editTable, setEditTable] = useState(false);
  const [task, setTask] = useState(todo.task);
  const { updateTodo, deleteTodo, completeTodo } = useTodos();
  const updateHandler = () => {
    if (!editTable) {
      setEditTable((prev) => !prev);
      return;
    } else {
      setEditTable((prev) => !prev);
      updateTodo(todo.id, task);
      return;

    }
  };
  const completeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    completeTodo(todo.id);
  };
  return (
    <div
      key={todo.id}
      className="bg-gray-100 w-full flex flex-col sm:flex-row justify-between gap-2  px-2 items-center rounded-md h-full py-1"
    >
      <div className={`flex gap-x-2 items-center w-full sm:w-[75%] ${todo.completed?"bg-orange-200":"bg-slate-300"} rounded-md`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={completeHandle}
          className="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded hover:bg-yellow-500 focus:ring-2"
        />
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          readOnly={!editTable}
          className={`outline-none text-xl px-2 py-1 font-serif font-medium ${todo.completed?"text-red-400 line-through":"text-black"} 
          bg-transparent border-none text-pretty w-[90%] rounded-md  h-8`}
        />
      </div>
      <div className="flex gap-x-1">
        <button
          onClick={updateHandler}
          className="px-2  text-xl font-serif border border-red-400 bg-green-300 hover:bg-green-500 rounded-lg"
        >
          {editTable ? "Save" : "Edit"}
        </button>
        {todo.completed && (
          <button
            onClick={() => deleteTodo(todo.id)}
            className="px-2  text-xl font-serif border border-red-300 bg-red-300 hover:bg-red-500 rounded-lg"
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoItems;
