

import { Outlet } from 'react-router-dom';
import './App.css'
import AddTodo from './components/AddTodo';
import Header from './components/Header';
function App() {
  
  return (
    <div className='h-screen w-screen flex'>
  <div className='w-full flex flex-col items-center bg-slate-300 '>
    <h2 className=' text-2xl font-bold p-4 my-2'>Todos</h2>
    <Header/>
    <AddTodo/>
    <Outlet/>
  </div>
  </div>
  )
}

export default App
