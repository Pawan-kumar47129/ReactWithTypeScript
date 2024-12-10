import { createContext, ReactNode, useContext, useEffect, useState} from "react";

type Todos = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
type TodosContext = {
  todos: Todos[];
  addTodo: (task: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, task: string) => void;
  completeTodo: (id: string) => void;
};
type providerProps = {
  children: ReactNode;
};
export const todoContext = createContext<TodosContext | null>(null);

export const TodoProvider = ({ children }: providerProps) => {
  const [todos, setTodos] = useState<Todos[]>(():Todos[]=>{
    try{
    const data=localStorage.getItem("typeScriptTodo") ||"[]";
      return JSON.parse(data);
    }
    catch(err){
      return [];
    }
  });
  useEffect(()=>{
    localStorage.setItem("typeScriptTodo",JSON.stringify(todos));
  },[todos])
  const addTodo = (task: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        task: task,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };
  const deleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id != id));
  };

  const updateTodo = (id: string, task: string) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, task: task };
        else return todo;
      })
    );
  };
  const completeTodo = (id:string) => {
    setTodos((todos)=>todos.map((todo)=>
     todo.id!==id?todo:{...todo,completed:!todo.completed})
    )
  };
  return (
    <todoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo, completeTodo }}
    >
      {children}
    </todoContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(todoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

export default useTodos;
