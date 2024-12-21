// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // BrowserRouter ve Routes kullanıyoruz
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateBookPage from './pages/CreateBookPage/CreateBookPage';

function App() {
  return (
   
      <Routes> {/* Routes bileşenini yönlendirmeleri tanımlamak için kullanıyoruz */}
        <Route path="/" element={<HomePage />} /> {/* Ana sayfa */}
        <Route path="/login" element={<LoginPage />} /> {/* Giriş sayfası */}
        <Route path="/register" element={<RegisterPage />} /> {/* kayit sayfası */}
        <Route path="/CreateBookPage" element={<CreateBookPage />} /> {/* CreateBookPage */}
        <Route path="*" element={<h1>Not Found</h1>} /> {/* Tanımlanmayan sayfalar için 404 */}
      </Routes>
    
  );
}

export default App;
