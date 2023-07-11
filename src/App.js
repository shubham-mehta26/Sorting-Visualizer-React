import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar undefined="true"/>
      <MainPage />
    </div>
  );
}

export default App;
