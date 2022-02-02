import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const LogoutButton = ({ setError }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  /* LOG OUT */
  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="log-out">
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};
