import { useState, useRef } from "react";
import "./pomodoro.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (e) {
      setError("Failed to login");
    }

    setLoading(false);
  }

  return (
    <section className="login__wrapper">
      <h1 className="welcome__msg">Welcome to My Pomodoro App</h1>
      {error && <h1 className="error__msg">{error}</h1>}
      <div className="container__login">
        <h1>Log in</h1>
        <div>
          <form className="form__container" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Your email"
              type="email"
              ref={emailRef}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              placeholder="Your password"
              type="password"
              ref={passwordRef}
            />
            <button type="submit" disabled={loading}>
              Log in
            </button>
            <p>
              or <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
