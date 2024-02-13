import { inject } from '@vercel/analytics';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Hackathons } from './components/Hackathons';
import { Project } from './components/Project';

function App(){

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<About></About>} />
    <Route path='/hackathons' element = {<Hackathons></Hackathons>} />
    <Route path='/projects' element={<Project></Project>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

 
inject();
export default App;
