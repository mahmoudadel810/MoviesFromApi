import React from "react";
import { Button } from "react-bootstrap";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Button 
      variant={theme === 'dark' ? 'light' : 'dark'} 
      size="sm" 
      onClick={toggleTheme}
      className="ms-2"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </Button>
  );
};

export default ThemeToggle;