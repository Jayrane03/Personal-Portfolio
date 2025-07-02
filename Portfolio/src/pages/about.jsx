// import React from 'react';
import ProfileCard from '../components/profileCard';
import devImage from '../assets/Images/dev_4.png';
import myResume from '../assets/Docs/Resume_Jay_04.pdf';
import Orb from '../components/Orb';
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      
<div style={{ width: '100%', height: '600px', position: 'absolute' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={true}
  />
</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProfileCard
          name="Jay Rane"
          title="Full Stack Developer"
          handle="@jayrane"
          status="Online"
          image={devImage}
          linkedin="https://www.linkedin.com/in/jayrane03"
          github="https://github.com/Jayrane03"
          instagram="https://www.instagram.com/__jay__3__5/"
          resume={myResume}
        />
      </div>
    </section>
  );
};

export default About;
