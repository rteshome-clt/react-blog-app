import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext.js';

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const toggleTheme = () =>
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}