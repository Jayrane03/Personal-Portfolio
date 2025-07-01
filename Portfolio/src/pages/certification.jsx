import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import aws from "../assets/Images/certIcons/aws.png";
import react from "../assets/Images/certIcons/react.png";
import java from "../assets/Images/certIcons/java.png";

const certifications = [
  {
    title: "Advanced React.js from Meta ",
    issuer: "Meta via Coursera",
    date: "May 22 2024",
    image: react,
    imageAlt: "React",  
    link: "https://www.coursera.org/account/accomplishments/verify/HNNGPASES94R",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    issuer: "Issued by Amazon Web Services Training and Certification",
    date: "April 15 2025",
    image: aws,
    imageAlt: "AWS",
    link: 'https://www.credly.com/badges/a79bccbe-9266-48ac-a000-54b1131e4413/public_url',
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL – IIT Kharagpur",
    date: "Jan - Apr 2025",
    image: java,
    imageAlt: "Java", 
    link: 'https://drive.google.com/file/d/1roq9ZsmSFb1S_Kx3822ObUtczj8jq3Xd/view',
  },
];

const CertificationSection = () => {
  return (
    <>
      <style>{`
        .cert-section {
          padding: 60px 20px;
          background: #f9f9f9;
          font-family: 'Segoe UI', sans-serif;
        }

        .cert-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 50px;
          color: #222;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 35px;
        }

        .cert-card {
          background: white;
          border-radius: 20px;
          padding: 25px;
          position: relative;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .cert-card:hover {
          transform: scale(1.04);
          border: 2px solid #00c6ff;
          box-shadow: 0 0 20px rgba(0, 198, 255, 0.6);
        }

        .cert-icon {
          font-size: 2.5rem;
          color: #007bff;
          margin-bottom: 15px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .cert_image {
          height: 70px;
          margin: 12px auto;
          display: block;
          object-fit: contain;
        }

        .cert-heading {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 12px 0;
          color: #333;
        }

        .cert-issuer {
          font-size: 1rem;
          color: #555;
          margin-bottom: 6px;
        }

        .cert-date {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 14px;
        }

        .cert-link {
          display: inline-block;
          padding: 10px 18px;
          background-color: #007bff;
          color: white;
          border-radius: 10px;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .cert-link:hover {
          background-color: #0056b3;
        }
          
           
      `}</style>

      <section className="cert-section" id="certifications">
        <div className="cert-container">
          <h2 className="section-title" id="cert-tit">🎓 Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon"><FaCertificate /></div>
                {cert.image && (
                  <img className='cert_image' src={cert.image} alt={cert.imageAlt || "cert"} />
                )}
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
    </>
  );
};

export default CertificationSection;
