import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.user); // Redux'tan kullanıcı bilgilerini alıyoruz

  const handleLogin = () => {
    if (email && password) {
      dispatch(loginUser({ email, password }));
    }
  };

  // Kullanıcı giriş yaptıysa, anasayfaya yönlendir
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

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
              className={`btn w-full ${loading ? 'btn-disabled' : 'btn-primary'}`}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}
          </form>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Dont have an account?{' '}
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
