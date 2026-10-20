import { NavLink, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function Navbar() {
  const { user } = useAppContext();

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link to="/" className="brand">
          <span className="brand-mark">RC</span>
          <span>Richfield Connect</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Sign Up
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {user ? 'Profile' : 'My Profile'}
          </NavLink>
          <NavLink to="/feed" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Feed
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
