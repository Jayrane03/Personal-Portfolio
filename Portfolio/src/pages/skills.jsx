import React from 'react';
import htmlImg from '../assets/Images/Skill_Images/html.png';
import cssImg from '../assets/Images/Skill_Images/css.png';
import bootImg from '../assets/Images/Skill_Images/boot.png';
import javascriptImg from '../assets/Images/Skill_Images/javascript.png';
import reactImg from '../assets/Images/Skill_Images/react-img.png';
import gitImg from '../assets/Images/Skill_Images/git.png';
import githubImg from '../assets/Images/Skill_Images/git-hub.png';
import nodeImg from '../assets/Images/Skill_Images/node.png';
import mongoImg from '../assets/Images/Skill_Images/mongo.png';
import javaImg from '../assets/Images/Skill_Images/java.png';
import '../assets/Style/about.css';
import '../assets/Style/index_2.css';
import '../assets/Style/index.css';
import '../assets/Style/project.css';
import '../assets/Style/skill.css';
import '../assets/Style/slider.css';
import '../assets/Style/main.css';
import '../assets/Style/active_class.css';

const Skill = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skill_container bg-grid">
                <div className="skill_box">
                    <h3 className="skill_subtit">DEVELOPMENT</h3>
                    <span filter-text="main" className="skill_name_first skill_name">WEB DEVELOPMENT</span>
                    <span filter-text="main" className="skill_name_first skill_name">BOOTSTRAP</span>
                    <span filter-text="main" className="skill_name_first skill_name">REACT.JS</span>
                    <span filter-text="main" className="skill_name_first skill_name">GIT-GITHUB</span>
                    <span filter-text="main" className="skill_name_first skill_name">NODE.JS</span>
                    <span filter-text="main" className="skill_name_first skill_name">MONGO DB</span>
                    <span filter-text="basic" className="skill_name_first skill_name">JAVA</span>
                </div>
            </div>

            <div className="sliderd">
                <div className="skill_images">
                    <div className="skill-new">
                        <div className="part skill_part_one">
                            <div className="image-skill" filter-image="basic">
                                <img src={htmlImg} alt="HTML" />
                            </div>
                            <div className="image-skill" filter-image="basic">
                                <img src={cssImg} alt="CSS" />
                            </div>
                            <div className="image-skill" filter-image="main">
                                <img src={bootImg} alt="Bootstrap" />
                            </div>
                            <div className="image-skill" filter-image="main">
                                <img src={javascriptImg} alt="JavaScript" />
                            </div>
                            <div className="image-skill" filter-image="main">
                                <img src={reactImg} alt="React" />
                            </div>
                        </div>
                        <div className="part skill_part_two">
                            <div className="image-skill" filter-image="main">
                                <img src={gitImg} alt="Git" />
                            </div>
                            <div className="image-skill" filter-image="main">
                                <img src={githubImg} alt="GitHub" />
                            </div>
                            <div className="image-skill" filter-image="main">
                                <img src={nodeImg} alt="Node.js" />
                            </div>
                            <div className="image-skill" filter-image="main">
                                <img src={mongoImg} alt="MongoDB" />
                            </div>
                            <div className="image-skill" filter-image="basic">
                                <img src={javaImg} alt="Java" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
