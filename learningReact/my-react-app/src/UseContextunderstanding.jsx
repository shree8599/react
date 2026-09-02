import React, { createContext, useState, useContext } from 'react'
// useContext is a hook that allows you to access the value of a context in a functional component. It takes a context object (the value returned from createContext) as an argument and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.


// Step 1: Create a Context
const ThemeContext = createContext();

// Step 2: Create a Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Create a Custom Hook to use Context
const useTheme = () => {
  return useContext(ThemeContext);
};

// Step 4: Child Component that uses Context
const ChildComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Main Component
const UseContextunderstanding = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>useContext Example - Theme Switcher</h1>
        <ChildComponent />
      </div>
    </ThemeProvider>
  )
}

export default UseContextunderstanding