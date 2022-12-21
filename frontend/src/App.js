import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './componenets/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
// pages and componenets
import Home from './pages/Home';

function App() {

  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
