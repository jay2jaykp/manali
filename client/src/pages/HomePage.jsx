import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    setUser(null);
  };
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      {user === null ? (
        <>
          <Link to="/seller/signup" className="bg-green-400 p-3 ">
            Become a Seller
          </Link>
          <Link to="/login" className="bg-green-400 p-3">
            Login
          </Link>
        </>
      ) : (
        <>
        <p>Welcome, {user.firstName}</p>
        <button className="bg-red-300 p-3" onClick={handleSignOut}>
          Sign Out
        </button>
        </>
      )}
    </div>
  );
};
