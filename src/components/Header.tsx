import { NavLink } from "react-router-dom";

function Header() {
    const navItems=[
        {
            name:"AllTodos",
            path:"/",
        },
        {
            name:"ActiveTodos",
            path:'active',
        },
        {
            name:'CompletedTodos',
            path:'completed'
        }
    ]
  return (
    <div>
      <ul className="flex justify-between mb-4 gap-x-2">
        {navItems.map((nav)=>(
            <li key={nav.name}>
          <NavLink to={nav.path}
          className={({isActive}) =>
            `block py-2 px-3 duration-200 ${isActive? "text-orange-700 underline": "text-green-700"} border-b border-gray-100 hover:bg-gray-50 font-serif lg:border-0 hover:text-orange-700  rounded-md`
          }>{nav.name}</NavLink>
        </li>
        ))}
       
      </ul>
    </div>
  );
}

export default Header;
