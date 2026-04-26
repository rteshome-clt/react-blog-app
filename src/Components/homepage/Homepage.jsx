import React from 'react';
import { Link } from 'react-router';
import Style from '../css/HomePage.module.css';

function Homepage() {
  return (
    <div className={Style.homepage}>
      
      <div className={Style.content}>
        <h1 className={Style.homepageTitle}>Welcome to My Blog App</h1>
        <p className={Style.description}>This app allows you to browse blog posts and share your thoughts.</p>
      </div>

      <nav className={Style.buttons}>
        <ul>
          <li>
            <Link to="/posts" className={Style.postButton}>
              <button>Explore Blogs</button>
            </Link>
          </li>
        </ul>
        <ul className={Style.bottomButtons}>
          <li>
            <Link to="/login" className={Style.loginButton}>
              <button>Login</button>
            </Link>
          </li>
          <li>
            <Link to="/contact" className={Style.contactButton}>
              <button>Contact Us</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Homepage;