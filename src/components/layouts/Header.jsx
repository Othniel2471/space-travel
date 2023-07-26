import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/planet.png';

function Header() {
  return (
    <header className="">
      <nav className="container mx-auto flex justify-center items-center flex-col h-20 border-b-2 md:flex-row md:justify-between">
        <div className="flex items-center justify-center gap-3 md:justify-normal">
          <img src={logo} alt="" className="w-1/12" />
          <h1 className="text-2xl font-semibold">Space Travelers Hub</h1>
        </div>
        <ul className="flex gap-5 text-blue-500">
          <NavLink
            className={({ isActive }) => (isActive ? 'border-b-2 border-blue-500' : 'border-none')}
            to="/"
          >
            Rocket
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-blue-500' : 'border-none')} to="/mission">Missions</NavLink>
          <div className="border-l-2 border-gray-400" />
          <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-blue-500' : 'border-none')} to="/profile">Profile</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
