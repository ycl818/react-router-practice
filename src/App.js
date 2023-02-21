import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import AlbumLayout from './pages/AlbumLayout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        主要內容輸出
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/album' element={<AlbumLayout/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
