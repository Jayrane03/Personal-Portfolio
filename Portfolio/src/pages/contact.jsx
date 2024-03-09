import React from 'react';
import contacImg from "../assets/Images/coding-img.jpg"
import '../assets/Style/about.css';
import '../assets/Style/index_2.css';
import '../assets/Style/index.css';
import '../assets/Style/project.css';
import '../assets/Style/skill.css';
import '../assets/Style/slider.css';
import '../assets/Style/main.css';
import '../assets/Style/active_class.css';

function Contact() {
    const sendEmail = (event) => {
        event.preventDefault();
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "jayu.rane32003@gmail.com",
            Password : "C3E828CC1A5D9BFA445F8E29DD3641D3D3EF",
            To: "jayrane53@gmail.com",
            From: document.getElementById("email").value,
            Subject: "New Contact Form Inquiry",
            Body: "Name:" + document.getElementById("name").value + "<br> Email:" + document.getElementById("email").value + "<br> Message:" + document.getElementById("message").value
        }).then(function() {
            alert("Thank you for your message! We will get back to you soon.");
            location.href = window.location.href;
            document.getElementById('message').value = '';
        });
    };
    const reset = () => {
        // Define your reset function logic here
    };

    return (
        <section className="contact" id="contact">
            <h2 className="section-title">
                CONTACT ME
            </h2>
            <div className="container con-container">
                <div className="row row-contact">
                    <div className="contact-left">
                        <div className="row-left">
                            <h1 className="dark_mode_text con-title">Get In Touch</h1>
                            <p className="dark_mode_text"><i className="bx bxl-gmail dark_mode_text "></i> jayrane53@gmail.com</p>
                            <p className="dark_mode_text"><i className="bx bx-phone dark_mode_text "></i> 9137532658</p>

                            <div className="social-icons">
                                <a className="dark_mode_text" href="https://www.facebook.com/jay.rane.792?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a>
                                <a className="dark_mode_text" href="https://www.instagram.com/__jay__3__5/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                                <a className="dark_mode_text" href="https://twitter.com/JayRane51855268" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                                <a className="dark_mode_text" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="row-right">
                            <div className="cont-img">
                                <img className="contact-img" src={contacImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form id="form-my" action="https://formspree.io/f/xpzejzwd" method="POST" onSubmit={(e) => {sendEmail(); reset(); e.preventDefault();}}>
                            <input className="form_input_tag" type="text" name="Name" id="name" placeholder="Your Name" required autoComplete="off"/>
                            <input className="form_input_tag" type="text" name="email" id="email" placeholder="Your Email" required autoComplete="off"/>
                            <input className="form_input_tag" type="text" name="Message" id="message" placeholder="Your Message" required autoComplete="off"/>
                            <button id="sub_btn" type="submit" className="btn con-sub">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
