import React from "react";
import styles from '../css/Header.module.css';
import { useTheme } from "./ThemeContext";
import { Link } from "react-router";

function Header() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className={styles.header}>
            <h1>My Blog</h1> 
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/posts/1">Post</Link></li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>     
                    <button onClick={toggleTheme}>
                        Toggle Theme: 
                        {theme === 'dark' ? ' dark' : ' light'}
                    </button>
                </ul>
            </nav>
        </div>
    );
}

export default Header; 
