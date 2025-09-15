import React from 'react';
import profileImage from '../assets/profile_image.jpg'

function ProfileSection() {
  return (
    <div className="profile-section">
      <div className="profile-container">
        <div className="profile-image">
            <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
        </div>
        <div className="profile-info">
          <h1>Ayomide Yekeen</h1>
          <span className="tagline">A Technical Wizard</span>
          <p>
           Ayomide is a skilled Full-stack Developer with a strong focus on frontend development, dedicated to crafting robust, efficient, and scalable applications. With a deep passion for creating reliable systems, Ayomide excels in designing and implementing solutions that ensure seamless performance and adaptability to meet diverse project demands.
          </p>
          <div className="profile-buttons">
            <a
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-resume"
            >
              View Resume
            </a>
            <a href="/projects" className="btn btn-projects">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;

