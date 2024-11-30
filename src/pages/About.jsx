import React from 'react';

const About = () => {
  return (
   <>
        <div className="about-section bg-light py-5">
          <div className="container">
    
            <h4 className='text-center my-5'>About</h4>
            <div className="row align-items-center">
              {/* Left Section - Image */}
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="https://images.pexels.com/photos/10925436/pexels-photo-10925436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Don't Quit Your Daydream"
                  className="img-fluid rounded shadow"
                />
              </div>
    
              {/* Right Section - Text */}
              <div className="col-md-6">
                <h2 className="fw-bold mb-3">Discover, Share, and Inspire</h2>
                <p className="lead mb-4">
                  Welcome to <span className="text-danger fw-bold">Travel Diaries</span>, your ultimate platform for sharing
                  stories and experiences from around the globe. Whether you're hiking mountain trails, exploring urban
                  wonders, or basking in the serenity of secluded beaches, we help you document it all.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <strong>Explore:</strong> Discover new destinations and find inspiration for your next adventure.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-pen text-success me-2"></i>
                    <strong>Share:</strong> Write your travel stories and upload stunning photos to inspire others.
                  </li>
                  <li>
                    <i className="fas fa-users text-warning me-2"></i>
                    <strong>Connect:</strong> Join a vibrant community of like-minded explorers.
                  </li>
                </ul>
                <a href="#contact" className="btn btn-primary mt-4 px-4 py-2">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
   </>
  );
};

export default About;
