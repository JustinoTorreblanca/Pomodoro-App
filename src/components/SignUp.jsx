//import { Formik, Field, Form } from "formik";
import "./pomodoro.styles.scss";
import { useAuth } from "../contexts/AuthContext";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  return (
    <section className="login__wrapper">
      {error && <h1>{error}</h1>}

      <div className="container__login">
        <h1>Sign up</h1>
        <div>
          <div className="form__container" onSubmit={handleSubmit}>
            <label htmlFor="name">First Name</label>
            <input
              type="name"
              id="name"
              name="name"
              required
              ref={nameRef}
              placeholder="Jane Doe"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              required
              ref={emailRef}
              placeholder="Email"
              type="email"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              required
              ref={passwordRef}
              placeholder="Password"
              type="password"
            />
            <label htmlFor="password">Confirm password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              required
              ref={passwordConfirmRef}
              placeholder="Confirm password"
              type="password"
            />
            <button type="submit" disabled={loading} onClick={handleSubmit}>
              Sign up
            </button>
            <p>
              Have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
