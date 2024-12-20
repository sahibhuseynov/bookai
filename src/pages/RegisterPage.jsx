import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/userSlice';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.user); // Redux'tan kullanıcı bilgilerini alıyoruz

  const handleRegister = () => {
    if (email && password) {
      dispatch(registerUser({ email, password }));
    }
  };

  // Kullanıcı başarılı bir şekilde kayıt olduysa, login sayfasına yönlendir
  useEffect(() => {
    if (user) {
      navigate('/login'); // Login sayfasına yönlendir
    }
  }, [user, navigate]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Create an account
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
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}
          </form>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary font-medium underline dark:text-primary-content"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
