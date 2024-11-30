import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allAPI';
import register from '../assets/signup.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: '', email: '', password: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (userData.username && userData.email && userData.password) {
      try {
        const result = await registerAPI(userData);
        if (result.status === 200) {
          alert(`Welcome ${result?.data?.username}...Please login to explore our page!!!`);
          setUserData({ username: "", email: "", password: "" });
          navigate('/login');
        } else if (result.response.status === 406) {
          alert(result.response.data);
          setUserData({ username: "", email: "", password: "" });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please fill the form completely');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row w-100 shadow-lg rounded overflow-hidden">

          {/* Left Side with Image and Overlay Text */}
          <div className="col-md-6 d-none d-md-block p-0 position-relative">
            <img src={register} alt="Travel Adventure" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-50 text-white p-4">
              <h4 className="display-5 fw-bold mb-3">Join the Adventure</h4>
              <p className="lead">
                Create an account to start documenting your travels & preserving memories in your personal travel journey.
              </p>
            </div>
          </div>

          {/* Right Side with Form */}
          <div className="col-md-6 d-flex flex-column  justify-content-center bg-white p-5">
            <form onSubmit={handleRegister}>
              <h4 className="mb-4 text-center">Sign Up</h4>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder=" Username"
                  value={userData.username}
                  onChange={e => setUserData({ ...userData, username: e.target.value })}
                  required
                />
              </div>

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
                Create Account
              </button>

              <p className="text-center text-muted small">Or</p>

              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
