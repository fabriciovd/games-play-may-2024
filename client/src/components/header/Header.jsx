import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function Header(props) {
  const { isAuthenticated, email } = useContext(AuthContext);
  return (
    <>
      <header>
        <h1>
          <Link className="home" to="/">
            GamesPlay, {email}
          </Link>
        </h1>
        <nav>
          <Link to="/games">All games</Link>
          {isAuthenticated ? (
            <div id="user">
              <Link to="/games/create">Create Game</Link>
              <Link to="/">Logout</Link>
            </div>
          ) : (
            <div id="guest">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
