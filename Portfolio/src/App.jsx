import  { useEffect } from 'react';
// import ScrollReveal from './scrollreveal/dist/scrollreveal.esm.js';
import Home from './pages/home';
import About from './pages/about';
import Skill from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './components/footer';
import CustomCursor from './components/custom_cursor';
import CertificationSection from './pages/certification';

const App = () => {
  useEffect(() => {
    const s = ScrollReveal({
      origin: "left",
      distance: "100px",
      duration: 2500,
      delay: 300,
    });

    s.reveal(`.cols0`);
    s.reveal(`.home_img`, { origin: "right" });
    s.reveal(`.about_image`, { origin: "right" });
    s.reveal(`.about_subtitile`);
    s.reveal(`.about_text`, { origin: "right" });
    s.reveal(`.slide-content`, { origin: "bottom" });
    s.reveal(`#butoo`, { origin: "top" });
    s.reveal(`.about_social`, { origin: "bottom", delay: 100 });
    s.reveal(`.abt-img-content`, { origin: "left", delay: 100 });
    s.reveal(`.vertical-line`, { origin: "top", delay: 100 });
    s.reveal(`.section-title`, { origin: "top", duration: 2220 });
    s.reveal(`.skill_box`, { origin: "bottom" });
    s.reveal(`.project-box`, { origin: "left" });
    s.reveal(`.info`, { origin: "right" });
    s.reveal(`.row-right`, { origin: "top" });
    s.reveal(`.row-left`, { origin: "bottom" });
    s.reveal(`.contact-right`, { origin: "bottom" });
    s.reveal(`.bx-up-arrow-alt`, { origin: "bottom" });
    s.reveal(`.skill_part_one`, { origin: "right" });
    s.reveal(`.skill_part_two`, { origin: "left" });
    s.reveal(`.slide`, { origin: "top", duration: 2220, delay: 100 });
    s.reveal(`.cert-card`, { origin: "bottom", duration: 2220, delay: 100 });

    // Clean up function
    return () => {
      s.destroy();
    };
  }, []);

  return (
    <>
    <CustomCursor/>
      <Home />
      <About />
      <Skill />
      <CertificationSection></CertificationSection>
      <Projects />
      <Contact></Contact>
      <div className="icon arrow_icon">
            <a href="#home"><i className="bx bx-up-arrow-alt arr-icon"></i></a>
        </div>
      <Footer></Footer>
    </>
  );
};

export default App;
