// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // BrowserRouter ve Routes kullanıyoruz
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
   
      <Routes> {/* Routes bileşenini yönlendirmeleri tanımlamak için kullanıyoruz */}
        <Route path="/" element={<HomePage />} /> {/* Ana sayfa */}
        <Route path="/login" element={<LoginPage />} /> {/* Giriş sayfası */}
        <Route path="/register" element={<RegisterPage />} /> {/* kayit sayfası */}
      </Routes>
    
  );
}

export default App;
