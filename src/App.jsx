import { useState, useEffect } from 'react';
import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';

const techList = ["Web3", "AI", "Real-Time"];

function App() {
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTechIndex((prevIndex) => (prevIndex + 1) % techList.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const currentTech = techList[techIndex];

  return (

  <>
  <Navbar></Navbar>
  <About tech={currentTech} />;
  </>
  )
}

export default App;
