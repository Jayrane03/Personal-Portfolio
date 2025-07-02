/* eslint-disable react/prop-types */
// import React from 'react';
import '../assets/Style/profile.css'; // Ensure this CSS is linked
import '../assets/Style/active_class.css'; // Ensure this CSS is linked
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';

const ProfileCard = ({
  name = "Jay Rane",
  title = "Full Stack Developer",
  handle = "@jayrane",
  status = "Online",
  image,
  linkedin,
  github,
  instagram,
  resume
}) => {
  return (
    <div className="custom-card">
      <img src={image} alt="profile" className="profile-background" />
      <div className="card-content">
        <h2>{name}</h2>
        <p>{title}</p>

        <div className="profile-footer">
          <div className="profile-user">
            <img src={image} alt="avatar" className="mini-avatar" />
            <div>
              <span className="handle">{handle}</span>
              <span className="status">{status}</span>
            </div>
          </div>

          <a className="contact-button" href="mailto:your@email.com">
            Contact Me
          </a>
        </div>

        <div className="socials">
          <a href={linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href={github} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href={resume} download><FaDownload title="Download Resume" /></a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
