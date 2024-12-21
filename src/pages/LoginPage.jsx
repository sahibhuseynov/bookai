import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setError } from '../features/userSlice'; // Redux action'larını import ediyoruz
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrorState] = useState(''); // Local error state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      const authInstance = getAuth();

      // Firebase üzerinden giriş yap
      signInWithEmailAndPassword(authInstance, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User logged in: ', user); // Giriş yapan kullanıcı bilgilerini logla

          // Kullanıcıyı Redux'a kaydet
          dispatch(setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }));

          // Başarılı giriş sonrası anasayfaya yönlendir
          navigate('/CreateBookPage');
        })
        .catch((error) => {
          // Hatalı giriş durumunda hata mesajı
          setErrorState('Invalid email or password');
          dispatch(setError('Invalid email or password')); // Redux'a da error'ı kaydet
        });
    } else {
      setErrorState('Please fill in both fields'); // Alanlar boş bırakılmamalı
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Login to your account
          </h1>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-900 dark:text-white">Your email</span>
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-900 dark:text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="button"
              className="btn w-full btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}
          </form>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Don't have an account?{' '}
            <a
              href="/register"
              className="text-primary font-medium underline dark:text-primary-content"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
