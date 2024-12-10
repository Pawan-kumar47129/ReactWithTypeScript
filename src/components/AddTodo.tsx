import React, { useState } from "react";
import useTodos from "../store/TodoContext";

function AddTodo() {
  const [task, setTask] = useState<string>('');
  const {addTodo} =useTodos();
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(task=='') return;
    addTodo(task);
    setTask("");

  };
  return (
    <div className="w-full sm:w-[35rem] mb-4">
    <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-y-1 justify-center items-center">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="add new todo....."
        className="bg-slate-100 px-6 py-2 w-full sm:w-[80%]  h-10 rounded-lg outline-red-500 border-none text-xl"
      />
      <button type="submit" className="bg-green-600 py-1 h-10 px-4 text-xl mx-2 font-medium rounded-lg w-[5rem]">Add</button>
    </form>
    </div>
  );
}

export default AddTodo;
