import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode =()=>{
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Navbar darkMode={isDarkMode} />
      <Sidebar darkMode={isDarkMode} toggle={toggleMode} undefined="true"/>
      <MainPage undefined="true"/>
    </div>
  );
}

export default App;
