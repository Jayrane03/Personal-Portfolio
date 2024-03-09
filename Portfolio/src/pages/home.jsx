import React, { useEffect } from 'react';
import Header from '../components/header';
import Typed from 'typed.js'; // Import Typed.js library
import "../assets/Style/index_2.css";
import "../assets/Style/index.css";
import "../assets/Style/main.css";
import "../assets/Style/active_class.css"; // Make sure to include necessary styles

const Home = () => {
    useEffect(() => {
        const strings = ["jay rane", "coder...", "developer..."];
        let index = 0;

        const typingEffect = new Typed(".multitext", {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500,
            loop: true,
            onStart: function(self) {
                self.strings = [strings[index]];
            },
            onStringTyped: function(index) {
                if (index === strings.length - 1) {
                    self.strings = [strings[0]];
                }
            }
        });

        return () => {
            typingEffect.destroy();
        };
    }, []); // Empty dependency array to run effect only once

    return (
        <>
            <Header />
            <section className="home" id="home">
                <div className="home_container bg-grid">
                    <div className="wrapper" id="wrapp">
                        <div className="cols cols0" id="cols0">
                            <span className="topline">Hello</span>
                            <h1 id="iam">I'm <span id="mul" className="multitext"></span></h1>
                            <h2>Web Developer</h2>
                            <div className="but">
                                <a href="#contact"><button>Contact Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
