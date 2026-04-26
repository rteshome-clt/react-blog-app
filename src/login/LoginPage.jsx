import React, { useEffect, useState } from "react";
import Styles from "../Components/css/LoginPage.module.css";
import { useAuth } from "../Components/authWrapper/AuthContext";
import { useNavigate } from "react-router";

function LoginPage() {
  const {login, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!userData.username.trim() || !userData.password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    if (userData.password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    login(userData.username, userData.password);
    navigate("/posts");
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/posts");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Login Page</h1>

      <form className={Styles.input} onSubmit={onSubmit}>
        <input
          placeholder="Username"
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        
        />

        {error && <p className={Styles.error}>{error}</p>}
        <button type="submit" className={Styles.submitButton}>Submit</button>
      </form>
      
      
    </div>
  );
}

export default LoginPage;