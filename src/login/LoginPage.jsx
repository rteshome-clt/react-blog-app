import React, { useState } from "react";
import Styles from "../Components/css/LoginPage.module.css";
import { useAuth } from "../Components/authWrapper/AuthContext";

function LoginPage() {
  const {login} = useAuth();
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(userData);
    login(userData.username);
  }

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Login Page</h1>

      <form className={Styles.input} onSubmit={onSubmit}>
        <input
          placeholder="Username"
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          placeholder="Username"
        />
        <input
          placeholder="Password"
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        
        />
        <button type="submit" className={Styles.submitButton}>Submit</button>
      </form>
      
      
    </div>
  );
}

export default LoginPage;