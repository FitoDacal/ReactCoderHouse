import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeWrapper({ children }) {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={isDarkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
            {children}
        </div>
    );
}