import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useFrom";
import { useState } from "react";

const initialValues = { email: "", password: "", rePassword: "" };

export default function Register(props) {
  const [error, setError] = useState("");
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async ({ email, password, rePassword }) => {
    if (password !== rePassword) {
      return setError("Passwords do not match");
    }

    register(email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  return (
    <>
      <section id="register-page" className="content auth">
        <form id="register" onSubmit={submitHandler}>
          <div className="container">
            <div className="brand-logo"></div>
            <h1>Register</h1>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="maria@email.com"
              value={values.email}
              onChange={changeHandler}
            />

            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              name="password"
              id="register-password"
              value={values.password}
              onChange={changeHandler}
            />

            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              name="rePassword"
              id="confirm-password"
              value={values.rePassword}
              onChange={changeHandler}
            />
            {error && (<p>
              <span style={{fontSize: '18px', color:'red', textAlign: "center"}}>{error}</span>
              </p>
              )}
            <input className="btn submit" type="submit" value="Register" />

            <p className="field">
              <span>
                If you already have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
