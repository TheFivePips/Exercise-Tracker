import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componenets/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
// pages and componenets
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
