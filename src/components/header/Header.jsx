import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container mx-auto font-workSans">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink
                to="/"
                className={`${({ isActive }) =>
                  isActive && 'active'} hover:text-primary hover:outline hover:outline-1 hover:outline-primary cursor-pointer rounded-lg py-[10px] px-5`}>
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/listed-books"
                className={`${({ isActive }) =>
                  isActive ? 'active' : ''} hover:text-primary hover:outline hover:outline-1 hover:outline-primary cursor-pointer rounded-lg py-[10px] px-5`}>
                <li>Listed Books</li>
              </NavLink>
              <NavLink
                to="/pages-to-read"
                className={`${({ isActive }) =>
                  isActive ? 'active' : ''} hover:text-primary hover:outline hover:outline-1 hover:outline-primary cursor-pointer rounded-lg py-[10px] px-5`}>
                <li>Pages to Read</li>
              </NavLink>
            </ul>
          </div>
          <a className="cursor-pointer text-neutral-900 text-2xl md:text-[28px] font-bold">Read_React</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 text-neutral-900 text-opacity-90 text-lg font-normal ">
            <NavLink
              to="/"
              className={`${({ isActive }) =>
                isActive && 'active'} hover:text-primary hover:outline hover:outline-1 hover:outline-primary cursor-pointer rounded-lg py-[10px] px-5`}>
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/listed-books"
              className={`${({ isActive }) =>
                isActive ? 'active' : ''} hover:text-primary hover:outline hover:outline-1 hover:outline-primary cursor-pointer rounded-lg py-[10px] px-5`}>
              <li>Listed Books</li>
            </NavLink>
            <NavLink
              to="/pages-to-read"
              className={`${({ isActive }) =>
                isActive ? 'active' : ''} hover:text-primary hover:outline hover:outline-1 hover:outline-primary cursor-pointer rounded-lg py-[10px] px-5`}>
              <li>Pages to Read</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-4  max-sm:items-end">
          <button className="cursor-pointer rounded-lg bg-primary text-white text-[14px] md:text-[18px] font-semibold py-3 md:py-[18px] px-4 md:px-7">Sign In</button>
          <button className="cursor-pointer rounded-lg bg-[#59C6D2] text-white text-[14px] md:text-[18px] font-semibold py-3 md:py-[18px] px-4 md:px-7">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
