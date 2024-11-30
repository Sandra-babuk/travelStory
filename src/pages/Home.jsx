import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from './About';
import Contact from './Contact';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { homeTravelstoriesAPI } from '../services/allAPI';

const Home = () => {
  const [allHomeStories,setAllHomeStories] = useState([])
  const navigate = useNavigate()

  console.log(allHomeStories);

  useEffect(()=>{
    getAllHomeStories()
  },[])

  const getAllHomeStories = async ()=>{
    try {
      const result = await homeTravelstoriesAPI()
      if (result.status==200) {
        setAllHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
      
    }
  }


  const handleStories = ()=>{
    if(sessionStorage.getItem("token")){
      navigate('/dashboard')
    }
  }
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container text-center text-white">
          <h1 className="display-3 fw-bold text-dark">Share Your Travel Stories</h1>
          <p className="lead mt-3 text-dark">
            Turn your adventures into timeless memories. Save, organize, and share your travel experiences with the world.
          </p>
          <a href="/dashboard" className="btn btn-outline-light btn-lg mt-4 px-5 py-3 shadow text-dark">
            Start Sharing
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5 text-center">
        <h2 className="fw-bold mb-4">What You Can Do</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <i className="fas fa-pen text-primary display-4"></i>
            <h5 className="mt-3">Write Your Stories</h5>
            <p>Document your travel adventures with vivid descriptions and memories.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-images text-success display-4"></i>
            <h5 className="mt-3">Add Photos</h5>
            <p>Upload pictures to bring your travel experiences to life.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-folder-open text-danger display-4"></i>
            <h5 className="mt-3">Organize & Save</h5>
            <p>Save your travel stories and access them anytime, anywhere.</p>
          </div>
        </div>
      </div>

      {/* Recent Stories Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Recent Travel Experiences</h2>
        <div className="row g-4">
          {/* Story Card 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Travel Story 1"
              />
              <div className="card-body">
                <h5 className="card-title">A Journey Through the Mountains</h5>
                <p className="card-text">
                  Trekking through breathtaking peaks and serene valleys.
                </p>
                <p className="card-text text-muted small">
                  <i className="fas fa-map-marker-alt"></i> Himalayas
                </p>
                <button onClick={handleStories} href="/dashboard" className="btn btn-outline-primary btn-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Story Card 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Travel Story 2"
              />
              <div className="card-body">
                <h5 className="card-title">Exploring Coastal Wonders</h5>
                <p className="card-text">
                  Discover hidden beaches and vibrant coastal towns.
                </p>
                <p className="card-text text-muted small">
                  <i className="fas fa-map-marker-alt"></i> Bali
                </p>
                <button onClick={handleStories} href="/dashboard" className="btn btn-outline-primary btn-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Story Card 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="card-img-top"
                alt="Travel Story 3"
              />
              <div className="card-body">
                <h5 className="card-title">City Adventures</h5>
                <p className="card-text">
                  Dive into the culture and charm of bustling cities.
                </p>
                <p className="card-text text-muted small">
                  <i className="fas fa-map-marker-alt"></i> New York City
                </p>
                <button onClick={handleStories} href="/dashboard" className="btn btn-outline-primary btn-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* No Stories Available Message */}
          <div className="col-12">
            <p className="text-center text-muted">
              No travel stories yet. Be the first to share your adventure!
            </p>
          </div>
        </div>

        {/* Centered Button to Add New Story */}
        <div className="text-center mt-5">
          <Button onClick={handleStories} variant="success">
            Add Your Travel Story
          </Button>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Call to Action Section */}
      <div className="bg-dark py-5 text-center text-white">
        <h2 className="fw-bold">Your Travel Stories Await</h2>
        <p className="lead mt-3">
          Don’t let your adventures fade away. Start saving your stories now!
        </p>
        <a href="/dashboard" className="btn btn-light btn-lg mt-3 px-5 py-3 shadow">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
