
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Schedule from './components/home/Schedule';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/schedule' element={<Schedule /> } />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
