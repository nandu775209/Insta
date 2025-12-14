import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../styles/Navbar.css"; 

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" style={{textDecoration:'none'}}>
          <h3 className="navbar-logo">Insta Mini</h3>
        </Link>
        
        <div className="navbar-actions">
          {user ? (
            <>
            
              <Link to="/create" className="btn-create">
                 ➕ Create
              </Link>

              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="login-text" style={{textDecoration:'none'}}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;