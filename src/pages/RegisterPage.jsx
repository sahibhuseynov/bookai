import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config'; // Firebase auth modülünü import ediyoruz

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password) {
      const authInstance = getAuth();

      // Firebase ile kullanıcı kaydı işlemi
      createUserWithEmailAndPassword(authInstance, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User registered successfully: ', user); // Kayıt başarılı ise kullanıcı bilgilerini logla

          // Başarılı kayıt sonrası login sayfasına yönlendir
          navigate('/login');
        })
        .catch((error) => {
          // Hata durumunda mesaj göster
          const errorCode = error.code;
          const errorMessage = error.message;

          console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
          if (errorCode === 'auth/email-already-in-use') {
            setError('This email is already in use.');
          } else if (errorCode === 'auth/weak-password') {
            setError('Password is too weak. Please enter a stronger password.');
          } else {
            setError('Registration failed. Please try again later.');
          }
        });
    } else {
      setError('Please fill in both fields');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Create your account
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
              onClick={handleRegister}
            >
              Register
            </button>
            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}
          </form>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-primary font-medium underline dark:text-primary-content"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
