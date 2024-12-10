import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './store/TodoContext.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AllTodos from './components/AllTodos.tsx'
import ActiveTodo from './components/ActiveTodo.tsx'
import CompletedTodo from './components/CompletedTodo.tsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<AllTodos/>}></Route>
      <Route path='active' element={<ActiveTodo/>}></Route>
      <Route path='completed' element={<CompletedTodo/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <RouterProvider router={router}/>
    </TodoProvider>
  </StrictMode>,
)
