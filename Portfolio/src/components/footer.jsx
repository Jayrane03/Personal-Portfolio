import React from 'react';
// import './Footer.css'; // Import CSS file if you have styles for this component

function Footer() {
    return (
      
        <section className="footer" id="footer">
            
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Jay<span>Developer</span></h3>
                    <p className="footer-links">
                        <a href="#home">Home</a>
                        |
                        <a href="#about">About</a>
                        |
                        <a href="#contact">Contact</a>
                        |
                        <a href="#portfolio">Projects</a>
                    </p>
                    <p className="footer-company-name">Copyright © 2022 <strong>Jay Rane</strong> All rights reserved</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> <b>MUMBAI</b> </span>
                            <b>MAHARASHTRA</b></p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+91 9137532658</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:jayrane53@gmail.com">jayrane53@gmail.com</a></p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About Me</span>
                        <strong>JAY RANE</strong>, love to solve problems and tasks. Done many projects in Web Development.
                    </p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/jay.rane.792?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/__jay__3__5/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                        <a href="https://twitter.com/JayRane51855268" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                        <a href="https://github.com/Jayrane03" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;
