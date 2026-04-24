import React from 'react';
import { Link } from 'react-router';
import Style from '../css/Homepage.module.css';

function Homepage() {
  return (
    <div className={Style.homepage}>
      
      
      <h1 className={Style.homepageTitle}>Welcome to My Blog App</h1>
      <p className={Style.description}>This app ...</p>

      <Link to="/posts" className={Style.postButton}>
        <button>Explore Blogs</button>
      </Link>
      <Link to="/login" className={Style.loginButton}>
        <button>Login</button>
      </Link>
      <Link to="/contact" className={Style.contactButton}>
        <button>Contact Us</button>
      </Link>
    </div>
  );
}

export default Homepage;