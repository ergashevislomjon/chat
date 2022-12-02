import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    let ring = document.querySelector(".lds-ring");
    let btnText = document.querySelector(".btn__text");
    ring.style.display = "inline-block";
    btnText.style.display = "none";

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
      ring.style.display = "none";
      btnText.style.display = "block";
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn_load">
            <span className="btn__text">Sign in</span>
            <div className="lds-ring" style={{ display: "none" }}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
          {err && <span className="error_text">Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
