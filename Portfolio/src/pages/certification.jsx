import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import '../assets/Style/certi.css'; // Import normal CSS

const certifications = [
  {
    title: "Advanced React.js from Meta ",
    issuer: "Meta via Coursera",
    date: "May 22 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/HNNGPASES94R",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    issuer: "Issued by Amazon Web Services Training and Certification",
    date: "April 15 2025",
    link: 'https://www.credly.com/badges/a79bccbe-9266-48ac-a000-54b1131e4413/public_url',
  },
 
];

const CertificationSection = () => {
  return (
    <section className="cert-section" id="certifications">
      <div className="cert-container">
        <h2 className="section-title">🎓 Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon"><FaCertificate /></div>
              <h3 className="cert-heading">{cert.title}</h3>
              <p className="cert-issuer">Issued by: <span>{cert.issuer}</span></p>
              <p className="cert-date">Date: {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
