import useTodos from "../store/TodoContext"
import TodoItems from "./TodoItems";

function AllTodos() {
    const {todos}=useTodos();
  return (
    <div className="flex flex-col gap-4 w-full sm:w-[35rem]">
        {todos && todos.map((todo)=>(
            <TodoItems todo={todo} key={todo.id}/>
        ))}
    </div>
  )
}

export default AllTodos
