// src/components/Navbar.jsx
import { Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout} from '../features/userSlice';
function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user); // Redux store'dan user state'ini alıyoruz
   
    const handleLogout = () => {
        dispatch(logout()); // logoutUser action'ını dispatch ediyoruz
        
        }
  return (
    <div className="navbar bg-eff2fd  px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li className=''><Link to="/">Home</Link></li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">MyApp</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li><Link to="/service1">Service 1</Link></li>
                <li><Link to="/service2">Service 2</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3 "> 
      {user?.user?.email ? (
          <button onClick={handleLogout} className="btn rounded-full bg-white">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn rounded-full px-6 py-2 bg-white shadow-md text-base">
            Login
          </Link>
        )}
        <Link to="/register" className="btn  bg-primary   text-white text-base rounded-full px-5 py-2 ">
            Signup
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
