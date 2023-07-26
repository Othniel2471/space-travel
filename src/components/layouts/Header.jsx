import { Link } from 'react-router-dom';
import logo from '../../assets/images/planet.png';

function Header() {
  return (
    <header className="">
      <nav className="container mx-auto flex justify-center items-center flex-col h-20 border-b-2 md:flex-row md:justify-between">
        <div className="flex items-center justify-center gap-3 md:justify-normal">
          <img src={logo} alt="" className="w-1/12" />
          <h1 className="text-2xl font-semibold">Space Travelers Hub</h1>
        </div>
        <ul className="flex gap-5">
          <Link to="/">Rocket</Link>
          <Link to="/mission">Missions</Link>
          <Link to="/profile">Profile</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
