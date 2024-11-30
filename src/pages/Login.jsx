import React, { useState } from 'react';
import { loginAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import login from '../assets/travel.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '', password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      try {
        const result = await loginAPI(userData);
        if (result.status === 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          setTimeout(() => {
            setUserData({ email: "", password: "" });
            navigate('/home');
          }, 2000);
        } else if (result.response.status === 404) {
          alert(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill the form completely");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row w-100 shadow-lg rounded overflow-hidden">

          {/* Left Side with Image and Overlay Text */}
          <div className="col-md-6 d-none d-md-block p-0 position-relative">
            <img src={login} alt="Travel Adventure" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-50 text-white p-4">
              <h4 className="display-5 fw-bold mb-3">Capture Your Journeys</h4>
              <p className="lead">
                Record your travel experiences and memories in your personal travel journey.
              </p>
            </div>
          </div>

          {/* Right Side with Form */}
          <div className="col-md-6 d-flex flex-column  justify-content-center bg-white p-5">
            <form onSubmit={handleLogin}>
              <h4 className="mb-4 text-center">Login</h4>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={userData.email}
                  onChange={e => setUserData({ ...userData, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={userData.password}
                  onChange={e => setUserData({ ...userData, password: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login
              </button>

              <p className="text-center text-muted small">Or</p>

              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                onClick={() => navigate("/register")}
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
